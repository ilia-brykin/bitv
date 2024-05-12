
import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const isButton = toRef(props, "isButton");

  const typeTag = computed(() => {
    return isButton.value ?
      "button" :
      "text";
  });

  return {
    typeTag,
  };
}
