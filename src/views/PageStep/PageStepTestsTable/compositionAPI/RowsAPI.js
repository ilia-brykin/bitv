import {
  computed,
  toRef,
} from "vue";

import {
  getTranslationTestName,
} from "../../../../global/functions/utils";
import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  forEach,
} from "lodash-es";

export default function RowsAPI(props) {
  const currentStep = toRef(props, "currentStep");

  const rows = computed(() => {
    const ROWS = [];

    forEach(currentStep.value.tests, test => {
      const NAME_KEY = getTranslationTestName({
        stepKey: currentStep.value.key,
        test,
      });

      ROWS.push({
        test: test,
        name: getTranslatedText({
          placeholder: NAME_KEY,
        })
      });
    });

    return ROWS;
  });

  return {
    rows,
  };
}
