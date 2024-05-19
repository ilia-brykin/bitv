const fs = require("fs");
const path = require("path");

const _ = require("lodash");

const STEPS_PATH = path.join("./src/i18n/steps/");
const SAVE_PATH = path.join("./src/i18n/searchIndexes/");
const LANG_INDEX = {};

const removeHtmlAndFormatText = input => {
  const withoutHtml = input.replace(/<[^>]*>/g, " ");

  return withoutHtml.replace(/\s+/g, " ").trim();
};

const isJsonFile = filePath => {
  return path.extname(filePath).toLowerCase() === ".json";
};

const extractLanguage = filePath => {
  const parts = filePath.split(path.sep);
  const fileName = parts[parts.length - 1];

  return fileName.split(".")[0];
};

const processJson = inputJson => {
  const outputJson = {
    id: "",
    title: "",
  };

  for (const key in inputJson) {
    const value = inputJson[key];

    if (key.includes("NAME_MENU")) {
      outputJson.title = value;
      const idMatch = key.match(/_STEP_([\d_]+(?:_\d+[A-Z]*)?)_/);
      if (idMatch && idMatch[1]) {
        outputJson.id = _.toLower(idMatch[1].replace(/_/g, "."));
      }
    } else {
      const keyMatch = key.match(/_STEP_[\d_]+(?:_\d+[A-Z]*)?_(.*?)_\d+_/);
      if (keyMatch && keyMatch[1]) {
        const groupKey = _.camelCase(keyMatch[1]);
        if (groupKey && groupKey.length > 1) {
          if (!outputJson[groupKey]) {
            outputJson[groupKey] = removeHtmlAndFormatText(value);
          } else {
            outputJson[groupKey] += ` ${ removeHtmlAndFormatText(value) }`;
          }
        }
      }
    }
  }

  return outputJson;
};

const readJson = filePath => {
  try {
    const languageCode = extractLanguage(filePath);
    const content = fs.readFileSync(filePath, "utf8");
    const jsonContent = JSON.parse(content);

    const INDEX_JSON = processJson(jsonContent);
    if (!LANG_INDEX[languageCode]) {
      LANG_INDEX[languageCode] = [];
    }
    LANG_INDEX[languageCode].push(INDEX_JSON);
  } catch (error) {
    console.error(`Error reading or parsing file ${ filePath }:`, error);
  }
};

const findJsonFiles = dir => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      findJsonFiles(filePath);
    } else if (isJsonFile(filePath)) {
      readJson(filePath);
    }
  });
};

const saveJsons = () => {
  for (const key in LANG_INDEX) {
    const JS_FILE_PATH = path.join(SAVE_PATH, `${ key }.json`);
    const data = JSON.stringify(LANG_INDEX[key], null, 2);
    fs.writeFileSync(JS_FILE_PATH, data, "utf8");
  }
};

findJsonFiles(STEPS_PATH);

saveJsons();
