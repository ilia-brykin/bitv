import {
  computed,
  toRef,
} from "vue";

import {
  getTranslationKeyRubric,
} from "../../../../global/functions/utils";
import {
  times,
} from "lodash-es";

export default function HtmlAPI(props, {
  headerKey = computed(() => ""),
}) {
  const currentStep = toRef(props, "currentStep");
  const rubricKey = toRef(props, "rubricKey");

  const countElements = computed(() => {
    return currentStep.value[rubricKey.value];
  });

  const htmlElements = computed(() => {
    const ELEMENTS = [];
    times(countElements.value, index => {
      const NUMBER = index + 1;
      ELEMENTS.push(getTranslationKeyRubric({
        stepKey: currentStep.value.key,
        rubricKey: headerKey.value,
        number: NUMBER,
      }));
    });

    return ELEMENTS;
  });

  return {
    htmlElements,
  };
}
