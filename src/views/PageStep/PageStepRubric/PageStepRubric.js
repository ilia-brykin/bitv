import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import HeaderAPI from "./compositionAPI/HeaderAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";

export default {
  name: "PageStepRubric",
  components: {
    ATranslation,
  },
  props: {
    currentStep: {
      type: Object,
      required: true,
    },
    rubricKey: {
      type: String,
      required: true,
      validator: value => ["whatChecked", "whyChecked", "howChecked", "sources", "classification", "questions"].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const {
      headerKey,
    } = HeaderAPI(props);

    const {
      htmlElements,
    } = HtmlAPI(props, {
      headerKey,
    });

    return {
      headerKey,
      htmlElements,
    };
  },
};
