import StepTagsItem from "./StepTagsItem/StepTagsItem.vue";

export default {
  name: "StepTags",
  components: {
    StepTagsItem,
  },
  props: {
    isButton: {
      type: Boolean,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
