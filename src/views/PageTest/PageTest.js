import AElement from "aloha-vue/src/AElement/AElement";
import AForm from "aloha-vue/src/ui/AForm/AForm";

import DataFormAPI from "./compositionAPI/DataFormAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "PageTest",
  components: {
    AElement,
    AForm,
  },
  setup() {
    const {
      json,
      jsonStepInfo,
      model,
      parseHtml,
    } = ModelAPI();

    const {
      dataForm,
    } = DataFormAPI();

    return {
      dataForm,
      json,
      jsonStepInfo,
      model,
      parseHtml,
    };
  },
};
