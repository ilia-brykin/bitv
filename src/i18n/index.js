import _de from "./de.json";
import _ru from "./ru.json";

import steps_9_1_1 from "./steps/steps_9_1_1/index";
import steps_9_1_3 from "./steps/steps_9_1_3/index";

export const de = {
  ..._de,
  ...steps_9_1_1.de,
  ...steps_9_1_3.de,
};

export const ru = {
  ..._ru,
  ...steps_9_1_1.ru,
  ...steps_9_1_3.ru,
};
