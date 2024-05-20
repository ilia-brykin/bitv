import {
  computed,
  toRef,
} from "vue";
import {
  useRoute,
  useRouter,
} from "vue-router";

import rubrics from "../../../../global/consts/rubrics";
import {
  forEach,
} from "lodash-es";

export default function LinkAPI(props) {
  const id = toRef(props, "id");
  const matches = toRef(props, "matches");
  const modelSearch = toRef(props, "modelSearch");

  const $route = useRoute();
  const $router = useRouter();

  const additionalQuery = computed(() => {
    const QUERY = {
      rubrics: [],
    };
    forEach(rubrics, (_, key) => {
      if (matches.value[key]) {
        QUERY.rubrics.push(key);
      }
    });

    if (matches.value.title) {
      QUERY.title = true;
    }

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

  const goTo = () => {
    if ($route.name === to.value.name &&
      $route.params.step === to.value.params.step) {
      $router.push({ query: to.value.query });
    }
  };

  return {
    goTo,
    to,
  };
}
