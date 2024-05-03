import AMenu2 from "aloha-vue/src/AMenu2/AMenu2";

import MenuItemsAPI from "./compositionAPI/MenuItemsAPI";

export default {
  name: "TheMenu",
  components: {
    AMenu2,
  },
  setup() {
    const {
      menuItems,
    } = MenuItemsAPI();

    return {
      menuItems,
    };
  },
};
