import {
  computed,
} from "vue";
import {
  useRoute,
} from "vue-router";

import ATranslationAPI from "aloha-vue/src/ATranslation/compositionAPI/ATranslationAPI";

import htmlTestPages from "../../../testPages/index";
import steps from "../../../global/consts/steps";

export default function TestAPI() {
  const $route = useRoute();

  const {
    language,
  } = ATranslationAPI();

  const hasCurrentTest = computed(() => {
    return !!(steps[$route.params.step]?.tests &&
      steps[$route.params.step]?.tests.indexOf($route.params.test) !== -1);
  });

  const currentHtml = computed(() => {
    if (!hasCurrentTest.value) {
      return undefined;
    }

    return htmlTestPages[`${ language.value }_${ `${ $route.params.step }`.replaceAll(".", "_") }_${ $route.params.test }`];
  });

  return {
    currentHtml,
    hasCurrentTest,
  };
}
