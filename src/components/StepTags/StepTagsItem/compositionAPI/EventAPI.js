import {
  computed,
  toRef,
} from "vue";

export default function EventAPI(props, {
  toggleTagInModelTags = () => {},
}) {
  const isButton = toRef(props, "isButton");
  const tag = toRef(props, "tag");

  const eventsLocal = computed(() => {
    if (isButton.value) {
      return {
        click: () => toggleTagInModelTags({ tag: tag.value }),
      };
    }

    return {};
  });

  return {
    eventsLocal,
  };
}
