import {
  watch,
} from "vue";

import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
import AElement from "aloha-vue/src/AElement/AElement";
import AInput from "aloha-vue/src/ui/AInput/AInput";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import TheSearchGlobalItem from "./TheSearchGlobalItem/TheSearchGlobalItem.vue";

import DropdownAPI from "./compositionAPI/DropdownAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "TheSearchGlobal",
  components: {
    ADropdown,
    AElement,
    AInput,
    ATranslation,
    TheSearchGlobalItem,
  },
  setup() {
    const {
      aDropdownRef,
      closeDropdown,
      openDropdown,
    } = DropdownAPI();

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
      openDropdown,
    });

    initIndexes();

    watch(modelLanguage, () => {
      initIndexes();
      changeModel("");
      closeDropdown();
      setDefaultItemsSearch();
    });

    return {
      aDropdownRef,
      changeModel,
      isTooFewCharacters,
      itemsSearch,
      model,
      startSearch,
    };
  },
};
