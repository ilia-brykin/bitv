import _de from "./de.json";
import _ru from "./ru.json";
import steps from "./steps/index";
import tags from "./tags";
import tests from "./tests";

export const de = {
  ..._de,
  ...steps.de,
  ...tags.de,
  ...tests.de,
};

export const ru = {
  ..._ru,
  ...steps.ru,
  ...tags.ru,
  ...tests.ru,
};
