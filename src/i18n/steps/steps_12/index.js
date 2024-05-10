import step_12_1_1 from "./step_12_1_1/index";
import step_12_1_2 from "./step_12_1_2/index";
import step_12_2_2 from "./step_12_2_2/index";
import step_12_2_3 from "./step_12_2_3/index";
import step_12_2_4 from "./step_12_2_4/index";


export default {
  de: {
    ...step_12_1_1.de,
    ...step_12_1_2.de,
    ...step_12_2_2.de,
    ...step_12_2_3.de,
    ...step_12_2_4.de,
  },
  ru: {
    ...step_12_1_1.ru,
    ...step_12_1_2.ru,
    ...step_12_2_2.ru,
    ...step_12_2_3.ru,
    ...step_12_2_4.ru,
  },
};
