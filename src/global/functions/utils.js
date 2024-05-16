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
