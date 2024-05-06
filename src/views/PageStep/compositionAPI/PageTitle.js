import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  getTranslationKeyName,
} from "../../../global/functions/utils";

export default function PageTitle({
  currentStep = computed(() => ({})),
  step = "",
}) {
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
    headerText,
    pageTitle,
  };
}
