import {
  computed,
} from "vue";
import {
  useRoute,
} from "vue-router";

import steps from "../../../global/consts/steps";

export default function StepAPI() {
  const $route = useRoute();
  const step = $route.params.step;

  const currentStep = computed(() => {
    return steps[step];
  });

  const hasStep = computed(() => {
    return !!currentStep.value;
  });

  return {
    currentStep,
    hasStep,
    step,
  };
}
