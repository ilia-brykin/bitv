import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import TestAPI from "./compositionAPI/TestAPI";

export default {
  name: "PageStepTest",
  components: {
    ATranslation,
  },
  setup() {
    const {
      currentHtml,
      hasCurrentTest,
    } = TestAPI();

    return {
      currentHtml,
      hasCurrentTest,
    };
  },
};
