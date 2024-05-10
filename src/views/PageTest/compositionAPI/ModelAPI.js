import {
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function ModelAPI() {
  const json = ref({});
  const jsonStepInfo = ref({});
  const model = ref({
    html: "",
  });
  const rubricsInfo = [
    {
      id: "_was_wird_geprüft-heading",
      keyTranslation: "WHAT_CHECKED",
      key: "whatChecked",
    },
    {
      id: "_warum_wird_das_geprüft-heading",
      keyTranslation: "WHY_CHECKED",
      key: "whyChecked",
    },
    {
      id: "_wie_wird_geprüft-heading",
      keyTranslation: "HOW_CHECKED",
      key: "howChecked",
    },
    {
      id: "_quellen-heading",
      keyTranslation: "SOURCES",
      key: "sources",
    },
    {
      id: "_einordnung_des_prüfschritts-heading",
      keyTranslation: "CLASSIFICATION",
      key: "classification",
    },
    {
      id: "_fragen_zu_diesem_prüfschritt-heading",
      keyTranslation: "QUESTIONS",
      key: "questions",
    },
  ];
  const tagsTranslate = {
    P: true,
    H3: true,
    H4: true,
    H5: true,
    H6: true,
    OL: true,
    UL: true,
  };

  const createElementFromHTML = htmlString => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    return div.firstChild;
  };

  const getStepName = ({ HTML }) => {
    const ELEMENT = HTML.querySelector(".Checkpoint__heading-large.Heading--h2");
    if (!ELEMENT) {
      return undefined;
    }

    return ELEMENT.innerText.trim() ;
  };

  const getStepKey = ({ HTML }) => {
    const ELEMENT = HTML.querySelector(".Checkpoint__heading-small.Heading--h3");
    if (!ELEMENT) {
      return undefined;
    }

    return ELEMENT.innerText.replace("Prüfschritt", "").trim().replaceAll(".", "_").toUpperCase();
  };

  const parseChildren = ({ children, KEY_PREFIX, JSON, objIndex, rubric, JSON_STEP_INFO }) => {
    forEach(children, child => {
      if (tagsTranslate[child.tagName] ||
        (child.tagName === "DIV" && child.hasAttribute("lang"))) {
        const KEY_TRANSLATE = `${ KEY_PREFIX }${ objIndex.index }_`;
        child.removeAttribute("class");
        child.removeAttribute("role");
        child.removeAttribute("aria-level");
        if (child.hasAttribute("lang")) {
          child.classList.add("a_ml_5");
        }
        JSON[KEY_TRANSLATE] = child.outerHTML.replaceAll("&nbsp;", " ").replaceAll("\\n", " ");
        JSON_STEP_INFO[rubric.key] = objIndex.index;
        objIndex.index++;
      } else {
        const currentChildren = child.children;
        parseChildren({
          children: currentChildren,
          KEY_PREFIX,
          JSON,
          objIndex,
          rubric,
          JSON_STEP_INFO,
        });
      }
    });
  };

  const getRubricJson = ({ JSON, JSON_STEP_INFO, rubric, HTML, STEP_KEY }) => {
    const ELEMENT = HTML.querySelector(`#${ rubric.id }`);
    const objIndex = {
      index: 1,
    };
    if (!ELEMENT) {
      JSON_STEP_INFO[rubric.key] = 0;
      return undefined;
    }

    const PARENT = ELEMENT.parentElement;
    const CONTENT = PARENT.querySelector(".Collapsible__content");
    if (!CONTENT) {
      return undefined;
    }

    const KEY_PREFIX = `_STEP_${ STEP_KEY }_${ rubric.keyTranslation }_`;
    const children = CONTENT.children;
    parseChildren({
      children,
      KEY_PREFIX,
      JSON,
      objIndex,
      rubric,
      JSON_STEP_INFO,
    });
  };

  const parseHtml = () => {
    if (!model.value.html) {
      return;
    }
    const JSON = {};
    const JSON_STEP_INFO = {};

    const HTML = createElementFromHTML(model.value.html);
    const STEP_KEY = getStepKey({ HTML });

    JSON[`_STEP_${ STEP_KEY }_NAME_`] = getStepName({ HTML });
    forEach(rubricsInfo, rubric => {
      getRubricJson({
        JSON,
        JSON_STEP_INFO,
        rubric,
        HTML,
        STEP_KEY,
      });
    });

    json.value = JSON;
    jsonStepInfo.value = JSON_STEP_INFO;
  };

  return {
    json,
    jsonStepInfo,
    model,
    parseHtml,
  };
}
