import {
  computed,
  toRef,
} from "vue";

import {
  getTranslationKeyName,
} from "../../../../global/functions/utils";
import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import steps from "../../../../global/consts/steps";

export default function TextAPI(props) {
  const id = toRef(props, "id");

  const currentStep = computed(() => {
    return steps[id.value];
  });

  const stepText = computed(() => {
    const STEP_NAME = getTranslatedText({
      placeholder: getTranslationKeyName({ stepKey: currentStep.value.key }),
    });

    return `${ id.value } ${ STEP_NAME }`;
  });

  return {
    stepText,
  };
}
