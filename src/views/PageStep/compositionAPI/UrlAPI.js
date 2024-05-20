import {
  computed,
  ref,
  watch,
} from "vue";
import {
  useRoute,
  useRouter,
} from "vue-router";

import rubrics from "../../../global/consts/rubrics";
import {
  forEach,
  isString,
} from "lodash-es";


export default function UrlAPI() {
  const $route = useRoute();
  const $router = useRouter();
  const rubricsOpen = ref({});
  const isWatchRouteQuery = ref(true);
  const searchFromUrl = ref("");
  const isSearchInTitle = ref(false);

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
    searchFromUrl.value = $route.query.search || "";
    isSearchInTitle.value = !!$route.query.title;

    isWatchRouteQuery.value = false;
    setTimeout(() => {
      $router.replace({ query: {} });
      setTimeout(() => {
        isWatchRouteQuery.value = true;
      });
    });
  };

  watch(() => $route.query, () => {
    if (isWatchRouteQuery.value) {
      initRubricsOpenFromUrl();
    }
  }, {
    deep: true,
  });

  return {
    initRubricsOpenFromUrl,
    isSearchInTitle,
    rubricsOpen,
    searchFromUrl,
  };
}
