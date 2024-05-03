import AElement from "aloha-vue/src/AElement/AElement";
import ASelect from "aloha-vue/src/ui/ASelect/ASelect";

import LanguagesAPI from "./compositionAPI/LanguagesAPI";

export default {
  name: "TheNavbar",
  components: {
    ASelect,
    AElement,
  },
  setup() {
    const {
      changeLanguage,
      languages,
      modelLanguage,
    } = LanguagesAPI();

    return {
      changeLanguage,
      languages,
      modelLanguage,
    };
  },
};
