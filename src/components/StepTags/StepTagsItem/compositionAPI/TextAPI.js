import {
  computed,
  toRef,
} from "vue";

import {
  getTranslationKeyTag,
  getTranslationKeyTagDescription,
} from "../../../../global/functions/utils";

export default function TextAPI(props) {
  const tag = toRef(props, "tag");

  const tagText = computed(() => {
    return getTranslationKeyTag({ tag: tag.value });
  });

  const tagTextDescription = computed(() => {
    return getTranslationKeyTagDescription({ tag: tag.value });
  });

  return {
    tagText,
    tagTextDescription,
  };
}
