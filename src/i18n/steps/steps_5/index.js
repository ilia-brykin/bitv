import step_5_2 from "./step_5_2/index";
import step_5_3 from "./step_5_3/index";
import step_5_4 from "./step_5_4/index";


export default {
  de: {
    ...step_5_2.de,
    ...step_5_3.de,
    ...step_5_4.de,
  },
  ru: {
    ...step_5_2.ru,
    ...step_5_3.ru,
    ...step_5_4.ru,
  },
};
