import {
  watch,
} from "vue";

import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AElement from "aloha-vue/src/AElement/AElement";
import AInput from "aloha-vue/src/ui/AInput/AInput";
import TheSearchGlobalItem from "../../components/TheSearchGlobal/TheSearchGlobalItem/TheSearchGlobalItem.vue";

import ModelAPI from "../../components/TheSearchGlobal/compositionAPI/ModelAPI";

export default {
  name: "PageAdditionalSearch",
  components: {
    ATranslation,
    AElement,
    AInput,
    TheSearchGlobalItem,
  },
  setup() {
    const {
      changeModel,
      initIndexes,
      isTooFewCharacters,
      itemsSearch,
      model,
      modelLanguage,
      setDefaultItemsSearch,
      startSearch,
    } = ModelAPI({
      maxItems: 0,
    });

    initIndexes();

    watch(modelLanguage, () => {
      initIndexes();
      changeModel("");
      setDefaultItemsSearch();
    });

    return {
      changeModel,
      isTooFewCharacters,
      itemsSearch,
      model,
      startSearch,
    };
  },
};
