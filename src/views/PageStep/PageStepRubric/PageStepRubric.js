import {
  toRef,
  watch,
} from "vue";

import AElement from "aloha-vue/src/AElement/AElement";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import HeaderAPI from "./compositionAPI/HeaderAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

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
      validator: value => ["whatChecked", "whyChecked", "howChecked", "sources", "classification", "questions"].indexOf(value) !== -1,
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

    initIsRubricOpenLocal();

    watch(isRubricOpen, () => {
      initIsRubricOpenLocal();
    });

    return {
      headerKey,
      htmlElements,
      iconToggleRubric,
      isRubricOpenLocal,
      toggleRubric,
    };
  },
};
