import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ActiveAPI(props, {
  appliedModel = ref({}),
}) {
  const isButton = toRef(props, "isButton");
  const tag = toRef(props, "tag");

  const isBtnActive = computed(() => {
    if (!isButton.value) {
      return false;
    }

    return appliedModel.value?.tagPresence.indexOf(tag.value) !== -1;
  });

  return {
    isBtnActive,
  };
}
