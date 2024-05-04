import {
  computed,
  toRef,
} from "vue";

import {
  snakeCase,
  toUpper,
} from "lodash-es";

export default function HeaderAPI(props) {
  const rubricKey = toRef(props, "rubricKey");

  const headerKey = computed(() => {
    return `_${ toUpper(snakeCase(rubricKey.value)) }_`;
  });

  return {
    headerKey,
  };
}
