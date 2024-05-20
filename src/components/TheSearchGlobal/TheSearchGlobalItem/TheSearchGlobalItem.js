import AElement from "aloha-vue/src/AElement/AElement";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import LinkAPI from "./compositionAPI/LinkAPI";
import MatchesAPI from "./compositionAPI/MatchesAPI";
import TextAPI from "./compositionAPI/TextAPI";

export default {
  name: "TheSearchGlobalItem",
  components: {
    AElement,
    ATranslation,
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

    const {
      rubricsMatches,
    } = MatchesAPI(props);

    return {
      goTo,
      rubricsMatches,
      stepText,
      to,
    };
  },
};
