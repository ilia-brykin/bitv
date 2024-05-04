import {
  de,
  ru,
} from "aloha-vue/src/i18n/allLanguages";
import {
  de as _de,
  ru as _ru,
} from "./i18n/index";

export const mainTranslation = {
  de: {
    ...de,
    ..._de,
  },
  ru: {
    ...ru,
    ..._ru,
  },
};
