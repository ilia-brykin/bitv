import {
  computed,
  toRef,
} from "vue";

export default function LinkAPI(props) {
  const id = toRef(props, "id");
  const modelSearch = toRef(props, "modelSearch");

  const to = computed(() => {
    return {
      name: "PageStep",
      params: {
        step: id.value,
      },
      query: {
        search: modelSearch.value,
      },
    };
  });

  return {
    to,
  };
}
