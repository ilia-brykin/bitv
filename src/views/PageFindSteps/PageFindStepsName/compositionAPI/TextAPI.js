import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default function TextAPI(props) {
  const step = toRef(props, "step");
  const modelSearch = toRef(props, "modelSearch");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const nameFiltered = computed(() => {
    if (!modelSearch.value) {
      return step.value.name;
    }

    return filterSearchHighlight(step.value.name, {
      searchModel: modelSearch.value,
    });
  });

  return {
    nameFiltered,
  };
}
