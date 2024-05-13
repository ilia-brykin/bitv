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
