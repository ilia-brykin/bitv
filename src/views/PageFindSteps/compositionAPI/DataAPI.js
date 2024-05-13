import {
  computed,
} from "vue";

import steps from "../../../global/consts/steps";
import {
  getTranslationKeyGroupName,
  getTranslationKeyName,
} from "../../../global/functions/utils";
import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  forEach,
} from "lodash-es";

export default function DataAPI() {
  const dataSteps = computed(() => {
    const DATA = [];
    forEach(steps, (step, key) => {
      const STEP_NAME = getTranslationKeyName({
        stepKey: step.key,
      });
      const GROUP_NAME = getTranslationKeyGroupName({
        group: step.group,
      });

      const STEP = {
        step: key,
        name: getTranslatedText({ placeholder: STEP_NAME }),
        tags: step.tags,
        group: getTranslatedText({ placeholder: GROUP_NAME }),
      };
      DATA.push(STEP);
    });

    return DATA;
  });

  return {
    dataSteps,
  };
}
