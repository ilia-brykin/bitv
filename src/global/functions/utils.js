import {
  snakeCase,
  toUpper,
} from "lodash-es";

export function getTranslationKeyName({ stepKey }) {
  return `_STEP_${ stepKey }_NAME_`;
}

export function getTranslationKeyRubric({ stepKey, rubricKey, number }) {
  return `_STEP_${ stepKey }${ rubricKey }${ number }_`;
}

export function getTranslationKeyGroupName({ group }) {
  const GROUP_KEY = group.replaceAll(".", "_");

  return `_STEP_${ GROUP_KEY }_NAME_`;
}

export function getTranslationKeyTag({ tag }) {
  const TAG_KEY = toUpper(snakeCase(tag));

  return `_TAG_${ TAG_KEY }_`;
}

export function getTranslationKeyTagGroup({ group }) {
  const GROUP_KEY = toUpper(group);

  return `_TAG_GROUP_${ GROUP_KEY }_`;
}

export function getTranslationKeyTagDescription({ tag }) {
  const TAG_KEY = toUpper(snakeCase(tag));

  return `_TAG_DESCRIPTION_${ TAG_KEY }_`;
}

export function highlightSearchTerm(html, searchTerm) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, false);
  const highlightSpan = `<span class="a_search_highlight">${ searchTerm }</span>`;

  let node;
  // eslint-disable-next-line no-cond-assign
  while (node = walker.nextNode()) {
    const regex = new RegExp(`(${ searchTerm })`, "gi");
    if (node.nodeValue.match(regex)) {
      const parentNode = node.parentNode;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = node.nodeValue.replace(regex, highlightSpan);
      while (tempDiv.firstChild) {
        parentNode.insertBefore(tempDiv.firstChild, node);
      }
      parentNode.removeChild(node);
    }
  }

  return doc.body.innerHTML;
}
