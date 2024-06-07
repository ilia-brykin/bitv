import AElement from "aloha-vue/src/AElement/AElement";
import APageTabTitle from "aloha-vue/src/APageTabTitle/APageTabTitle";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import PageStepRubric from "./PageStepRubric/PageStepRubric.vue";
import PageStepTestsTable from "./PageStepTestsTable/PageStepTestsTable.vue";
import StepTags from "../../components/StepTags/StepTags.vue";

import LinksStepAPI from "./compositionAPI/LinksStepAPI";
import PageTitle from "./compositionAPI/PageTitle";
import StepAPI from "./compositionAPI/StepAPI";
import UrlAPI from "./compositionAPI/UrlAPI";

export default {
  name: "PageStep",
  components: {
    AElement,
    APageTabTitle,
    ATranslation,
    PageStepRubric,
    PageStepTestsTable,
    StepTags,
  },
  setup() {
    const {
      initRubricsOpenFromUrl,
      isSearchInTitle,
      rubricsOpen,
      searchFromUrl,
    } = UrlAPI();

    const {
      currentStep,
      hasStep,
      step,
    } = StepAPI();

    const {
      headerStep,
      headerTextWithSearch,
      pageTitle,
    } = PageTitle({
      currentStep,
      isSearchInTitle,
      searchFromUrl,
      step,
    });

    const {
      hasNextStep,
      hasPreviousStep,
      toNextStep,
      toPreviousStep,
    } = LinksStepAPI({
      step,
    });

    initRubricsOpenFromUrl();

    return {
      currentStep,
      hasNextStep,
      hasPreviousStep,
      hasStep,
      headerStep,
      headerTextWithSearch,
      pageTitle,
      rubricsOpen,
      searchFromUrl,
      toNextStep,
      toPreviousStep,
    };
  },
};
