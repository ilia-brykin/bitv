import APageTabTitle from "aloha-vue/src/APageTabTitle/APageTabTitle";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import PageStepRubric from "./PageStepRubric/PageStepRubric.vue";

import StepAPI from "./compositionAPI/StepAPI";
import PageTitle from "./compositionAPI/PageTitle";

export default {
  name: "PageStep",
  components: {
    APageTabTitle,
    ATranslation,
    PageStepRubric,
  },
  setup() {
    const {
      currentStep,
      hasStep,
      step,
    } = StepAPI();

    const {
      headerStep,
      headerText,
      pageTitle,
    } = PageTitle({
      currentStep,
      step,
    });

    return {
      currentStep,
      hasStep,
      headerStep,
      headerText,
      pageTitle,
    };
  },
};
