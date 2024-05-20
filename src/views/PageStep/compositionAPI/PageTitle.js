import {
  computed,
  ref,
} from "vue";

import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  getTranslationKeyName,
} from "../../../global/functions/utils";

export default function PageTitle({
  currentStep = computed(() => ({})),
  isSearchInTitle = ref(false),
  searchFromUrl = ref(""),
  step = "",
}) {
  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const headerStep = computed(() => {
    if (step) {
      return getTranslatedText({
        placeholder: "_TEXT_STEP_{{step}}_",
        extra: {
          step,
        },
      });
    }

    return undefined;
  });

  const headerText = computed(() => {
    if (currentStep.value?.key) {
      return getTranslatedText({
        placeholder: getTranslationKeyName({ stepKey: currentStep.value.key }),
      });
    }

    return undefined;
  });

  const headerTextWithSearch = computed(() => {
    if (!isSearchInTitle.value || !searchFromUrl.value) {
      return headerText.value;
    }

    return filterSearchHighlight(headerText.value, { searchModel: searchFromUrl.value });
  });

  const pageTitle = computed(() => {
    let title = "";
    if (headerStep.value) {
      title = `${ headerStep.value } `;
    }

    title += headerText.value;

    return title;
  });

  return {
    headerStep,
    headerTextWithSearch,
    pageTitle,
  };
}
