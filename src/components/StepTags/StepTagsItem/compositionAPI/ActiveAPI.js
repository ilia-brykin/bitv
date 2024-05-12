import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ActiveAPI(props, {
  modelTags = ref({}),
}) {
  const isButton = toRef(props, "isButton");
  const tag = toRef(props, "tag");

  const isBtnActive = computed(() => {
    if (!isButton.value) {
      return false;
    }

    return !!modelTags.value[tag.value];
  });

  return {
    isBtnActive,
  };
}
