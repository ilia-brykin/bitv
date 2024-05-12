import {
  ref,
} from "vue";

const modelTags = ref({});

export default function TagsAPI() {
  const toggleTagInModelTags = ({ tag }) => {
    modelTags.value[tag] = !modelTags.value[tag];
  };

  return {
    modelTags,
    toggleTagInModelTags,
  };
}
