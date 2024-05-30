import {
  computed,
} from "vue";

import {
  stepsList,
} from "../../../global/consts/steps";

export default function LinksStepAPI({
  step = "",
}) {
  const currentStepIndex = computed(() => {
    return stepsList.indexOf(step);
  });

  const hasPreviousStep = computed(() => {
    return currentStepIndex.value > 0;
  });

  const hasNextStep = computed(() => {
    return currentStepIndex.value < stepsList.length - 1;
  });

  const toPreviousStep = computed(() => {
    return {
      name: "PageStep",
      params: {
        step: stepsList[currentStepIndex.value - 1],
      },
    };
  });

  const toNextStep = computed(() => {
    return {
      name: "PageStep",
      params: {
        step: stepsList[currentStepIndex.value + 1],
      },
    };
  });

  return {
    hasNextStep,
    hasPreviousStep,
    toNextStep,
    toPreviousStep,
  };
}
