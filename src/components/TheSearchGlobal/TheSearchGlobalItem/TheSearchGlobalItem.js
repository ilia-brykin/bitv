import AElement from "aloha-vue/src/AElement/AElement";

import LinkAPI from "./compositionAPI/LinkAPI";
import TextAPI from "./compositionAPI/TextAPI";

export default {
  name: "TheSearchGlobalItem",
  components: {
    AElement,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    inNavbar: {
      type: Boolean,
      required: true,
    },
    matches: {
      type: Object,
      required: true,
    },
    modelSearch: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      goTo,
      to,
    } = LinkAPI(props);

    const {
      stepText,
    } = TextAPI(props);

    return {
      goTo,
      stepText,
      to,
    };
  },
};
