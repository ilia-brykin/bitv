import AElement from "aloha-vue/src/AElement/AElement";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import EventAPI from "./compositionAPI/EventAPI";
import TagsAPI from "../../../global/compositionAPI/TagsAPI";
import TextAPI from "./compositionAPI/TextAPI";
import TypeAPI from "./compositionAPI/TypeAPI";

export default {
  name: "StepTagsItem",
  components: {
    AElement,
  },
  props: {
    isButton: {
      type: Boolean,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      modelTags,
      toggleTagInModelTags,
    } = TagsAPI();

    const {
      isBtnActive,
    } = ActiveAPI(props, {
      modelTags,
    });

    const {
      classTagLocal,
    } = ClassAPI(props);

    const {
      typeTag,
    } = TypeAPI(props);

    const {
      eventsLocal,
    } = EventAPI(props, {
      toggleTagInModelTags,
    });

    const {
      tagText,
      tagTextDescription,
    } = TextAPI(props);

    return {
      classTagLocal,
      eventsLocal,
      isBtnActive,
      tagText,
      tagTextDescription,
      typeTag,
    };
  },
};
