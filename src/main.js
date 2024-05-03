import App from "./App/App.vue";
import {
  createApp,
} from "vue";
import router from "./router/index";
import AIconPlugin from "aloha-vue/src/plugins/AIconPlugin";
import AI18nPlugin from "aloha-vue/src/plugins/AI18nPlugin";
import AMobilePlugin from "aloha-vue/src/plugins/AMobilePlugin";
import mainIcons from "./mainIcons";

import {
  mainTranslation,
} from "./mainTranslation";
import {
  modelLanguage,
  setLanguageFromLocalStorage,
} from "./components/TheNavbar/compositionAPI/LanguagesAPI";

setLanguageFromLocalStorage();

const APP = createApp(App);

APP.use(AI18nPlugin, mainTranslation, modelLanguage.value, {});
APP.use(AIconPlugin, {
  icons: mainIcons,
});
APP.use(AMobilePlugin, {
  breakpoint: 991,
});
APP.use(router);
APP.mount("#app");
