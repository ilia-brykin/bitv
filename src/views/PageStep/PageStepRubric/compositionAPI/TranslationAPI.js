import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  highlightSearchTerm,
} from "../../../../global/functions/utils";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function TranslationAPI(props, {
  htmlElements = computed(() => []),
}) {
  const isRubricOpen = toRef(props, "isRubricOpen");
  const searchFromUrl = toRef(props, "searchFromUrl");

  const elementsTranslated = computed(() => {
    const ELEMENTS = [];
    forEach(htmlElements.value, element => {
      ELEMENTS.push({
        key: element,
        htmlTranslation: getTranslatedText({
          placeholder: element,
        })
      });
    });

    return ELEMENTS;
  });


  const elementsTranslatedAndHighlighted = computed(() => {
    if (!isRubricOpen.value || !searchFromUrl.value) {
      return elementsTranslated.value;
    }

    const ELEMENTS_TRANSLATED_CLONE = cloneDeep(elementsTranslated.value);
    forEach(ELEMENTS_TRANSLATED_CLONE, element => {
      element.htmlTranslation = highlightSearchTerm(element.htmlTranslation, searchFromUrl.value);
    });

    return ELEMENTS_TRANSLATED_CLONE;
  });

  return {
    elementsTranslatedAndHighlighted,
  };
}
