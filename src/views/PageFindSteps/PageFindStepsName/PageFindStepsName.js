import AElement from "aloha-vue/src/AElement/AElement";

import TextAPI from "./compositionAPI/TextAPI";

export default {
  name: "PageFindStepsName",
  components: {
    AElement,
  },
  props: {
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
    step: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      nameFiltered,
    } = TextAPI(props);

    return {
      nameFiltered,
    };
  },
};
