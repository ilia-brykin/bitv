import {
  computed,
  ref,
} from "vue";
import {
  useRoute,
} from "vue-router";

import rubrics from "../../../global/consts/rubrics";
import {
  forEach,
  isString,
} from "lodash-es";


export default function UrlAPI() {
  const $route = useRoute();
  const rubricsOpen = ref({});

  const rubricsFromUrl = computed(() => {
    if (!$route.query.rubrics) {
      return [];
    }
    if (isString($route.query.rubrics)) {
      return [$route.query.rubrics];
    }

    return $route.query.rubrics;
  });

  const initRubricsOpenFromUrl = () => {
    forEach(rubrics, (_, key) => {
      rubricsOpen.value[key] = !!(rubricsFromUrl.value.length &&
        rubricsFromUrl.value.indexOf(key) !== -1);
    });
  };


  return {
    initRubricsOpenFromUrl,
    rubricsOpen,
  };
}
