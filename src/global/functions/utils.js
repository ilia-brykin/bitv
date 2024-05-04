export function getTranslationKeyName({ stepKey }) {
  return `_STEP_${ stepKey }_NAME_`;
}

export function getTranslationKeyRubric({ stepKey, rubricKey, number }) {
  return `_STEP_${ stepKey }${ rubricKey }${ number }_`;
}
