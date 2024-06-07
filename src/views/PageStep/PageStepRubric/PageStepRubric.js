import {
  toRef,
  watch,
} from "vue";

import AElement from "aloha-vue/src/AElement/AElement";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import HeaderAPI from "./compositionAPI/HeaderAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import TranslationAPI from "./compositionAPI/TranslationAPI";

export default {
  name: "PageStepRubric",
  components: {
    AElement,
    ATranslation,
  },
  props: {
    currentStep: {
      type: Object,
      required: true,
    },
    isRubricOpen: {
      type: Boolean,
      required: true,
    },
    rubricKey: {
      type: String,
      required: true,
      validator: value => ["whatChecked", "whyChecked", "howChecked", "sources", "classification", "questions", "tests"].indexOf(value) !== -1,
    },
    searchFromUrl: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props) {
    const isRubricOpen = toRef(props, "isRubricOpen");

    const {
      headerKey,
    } = HeaderAPI(props);

    const {
      htmlElements,
    } = HtmlAPI(props, {
      headerKey,
    });

    const {
      iconToggleRubric,
      initIsRubricOpenLocal,
      isRubricOpenLocal,
      toggleRubric,
    } = ToggleAPI(props);

    const {
      elementsTranslatedAndHighlighted,
    } = TranslationAPI(props, {
      htmlElements,
    });

    initIsRubricOpenLocal();

    watch(isRubricOpen, () => {
      initIsRubricOpenLocal();
    });

    return {
      elementsTranslatedAndHighlighted,
      headerKey,
      iconToggleRubric,
      isRubricOpenLocal,
      toggleRubric,
    };
  },
};
