import {
  computed,
  toRef,
} from "vue";

import rubrics from "../../../../global/consts/rubrics";
import {
  forEach,
} from "lodash-es";

export default function MatchesAPI(props) {
  const matches = toRef(props, "matches");

  const rubricsMatches = computed(() => {
    const RUBRICS = [];
    forEach(rubrics, (rubricName, key) => {
      if (matches.value[key]) {
        RUBRICS.push({
          name: rubricName,
          matches: matches.value[key],
        });
      }
    });

    return RUBRICS;
  });

  return {
    rubricsMatches,
  };
}
