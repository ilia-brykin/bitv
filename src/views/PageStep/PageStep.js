import APageTabTitle from "aloha-vue/src/APageTabTitle/APageTabTitle";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import PageStepRubric from "./PageStepRubric/PageStepRubric.vue";
import StepTags from "../../components/StepTags/StepTags.vue";

import StepAPI from "./compositionAPI/StepAPI";
import PageTitle from "./compositionAPI/PageTitle";
import UrlAPI from "./compositionAPI/UrlAPI";

export default {
  name: "PageStep",
  components: {
    APageTabTitle,
    ATranslation,
    PageStepRubric,
    StepTags,
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

    const {
      initRubricsOpenFromUrl,
      rubricsOpen,
    } = UrlAPI();

    initRubricsOpenFromUrl();

    return {
      currentStep,
      hasStep,
      headerStep,
      headerText,
      pageTitle,
      rubricsOpen,
    };
  },
};
