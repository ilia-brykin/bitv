import _de from "./de.json";
import _ru from "./ru.json";

import steps_9_1_1 from "./steps/steps_9_1_1/index";
import steps_9_1_3 from "./steps/steps_9_1_3/index";
import steps_9_1_4 from "./steps/steps_9_1_4/index";
import steps_9_2_1 from "./steps/steps_9_2_1/index";
import steps_9_2_2 from "./steps/steps_9_2_2/index";
import steps_9_2_3 from "./steps/steps_9_2_3/index";
import steps_9_2_4 from "./steps/steps_9_2_4/index";
import steps_9_2_5 from "./steps/steps_9_2_5/index";

export const de = {
  ..._de,
  ...steps_9_1_1.de,
  ...steps_9_1_3.de,
  ...steps_9_1_4.de,
  ...steps_9_2_1.de,
  ...steps_9_2_2.de,
  ...steps_9_2_3.de,
  ...steps_9_2_4.de,
  ...steps_9_2_5.de,
};

export const ru = {
  ..._ru,
  ...steps_9_1_1.ru,
  ...steps_9_1_3.ru,
  ...steps_9_1_4.ru,
  ...steps_9_2_1.ru,
  ...steps_9_2_2.ru,
  ...steps_9_2_3.ru,
  ...steps_9_2_4.ru,
  ...steps_9_2_5.ru,
};
