import {
  computed,
  toRef,
} from "vue";

import rubrics from "../../../../global/consts/rubrics";
import {
  forEach,
} from "lodash-es";

export default function LinkAPI(props) {
  const id = toRef(props, "id");
  const matches = toRef(props, "matches");
  const modelSearch = toRef(props, "modelSearch");

  const additionalQuery = computed(() => {
    const QUERY = {
      rubrics: [],
    };
    forEach(rubrics, (_, key) => {
      if (matches.value[key]) {
        QUERY.rubrics.push(key);
      }
    });

    return QUERY;
  });

  const to = computed(() => {
    return {
      name: "PageStep",
      params: {
        step: id.value,
      },
      query: {
        search: modelSearch.value,
        ...additionalQuery.value,
      },
    };
  });

  return {
    to,
  };
}
