import {
  computed,
  ref,
} from "vue";
import {
  useRoute,
  useRouter,
} from "vue-router";

import steps from "../../../global/consts/steps";
import tags from "../../../global/consts/tags";
import {
  getTranslationKeyGroupName,
  getTranslationKeyTag,
  getTranslationKeyTagDescription,
  getTranslationKeyTagGroup,
} from "../../../global/functions/utils";
import {
  getTranslatedText,
} from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";
import {
  cloneDeep,
  difference,
  filter as _filter,
  forEach,
  intersection, keyBy,
  toLower,
} from "lodash-es";

const appliedModel = ref({
  group: [],
  steps: [],
  tagPresence: [],
  tagAbsence: [],
});
const unappliedModel = ref({
  group: [],
  steps: [],
  tagPresence: [],
  tagAbsence: [],
});

export default function FiltersAPI({
  dataSteps = computed(() => []),
} = {}) {
  const $route = useRoute();
  const $router = useRouter();
  const filterMain = {
    type: "text",
    id: "name",
    label: "_STEP_NAME_",
  };
  const mainModel = ref({
    name: "",
  });
  const mainModelApplied = ref({
    name: "",
  });

  const urlParams = computed(() => {
    const URL_PARAMS = {};

    forEach(appliedModel.value, (model, key) => {
      if (model?.length) {
        URL_PARAMS[key] = model;
      }
    });

    if (mainModel.value.name) {
      URL_PARAMS.name = mainModel.value.name;
    }

    return URL_PARAMS;
  });

  const stepsGroups = computed(() => {
    const GROUPS_KEYS = {};
    const GROUPS = [];
    forEach(steps, step => {
      if (GROUPS_KEYS[step.group]) {
        return;
      }

      const GROUP_NAME = getTranslationKeyGroupName({
        group: step.group,
      });

      GROUPS.push({ label: getTranslatedText({ placeholder: GROUP_NAME }), value: step.group });
      GROUPS_KEYS[step.group] = true;
    });

    return GROUPS;
  });

  const dataTags = computed(() => {
    const TAGS = cloneDeep(tags);

    forEach(TAGS, tag => {
      const TAG_KEY = getTranslationKeyTag({
        tag: tag.tag,
      });
      const TAG_TRANSLATED = getTranslatedText({
        placeholder: TAG_KEY,
      });
      const TAG_KEY_DESCRIPTION = getTranslationKeyTagDescription({
        tag: tag.tag,
      });
      const TAG_DESCRIPTION_TRANSLATED = getTranslatedText({
        placeholder: TAG_KEY_DESCRIPTION,
      });

      tag.label = `${ TAG_TRANSLATED } (${ TAG_DESCRIPTION_TRANSLATED })`;
    });

    return TAGS;
  });

  const getTranslatedGroup = ({ group }) => {
    const KEY_GROUP = getTranslationKeyTagGroup({ group });

    return getTranslatedText({
      placeholder: KEY_GROUP,
    });
  };

  const filters = computed(() => {
    return [
      {
        type: "multiselect",
        id: "group",
        label: "_STEP_GROUP_",
        alwaysVisible: true,
        deselectable: true,
        search: true,
        data: stepsGroups.value,
        keyLabel: "label",
        keyId: "value",
      },
      {
        type: "multiselect",
        id: "tagPresence",
        label: "_TAG_PRESENCE_FILTER_",
        alwaysVisible: true,
        search: true,
        data: dataTags.value,
        keyLabel: "label",
        keyId: "tag",
        keyGroup: "group",
        sortOrder: "asc",
        sortOrderGroup: "desc",
        keyGroupCallback: getTranslatedGroup,
      },
      {
        type: "multiselect",
        id: "tagAbsence",
        label: "_TAG_ABSENCE_FILTER_",
        alwaysVisible: true,
        search: true,
        data: dataTags.value,
        keyLabel: "label",
        keyId: "tag",
        keyGroup: "group",
        sortOrder: "asc",
        sortOrderGroup: "desc",
        keyGroupCallback: getTranslatedGroup,
      },
      {
        type: "multiselect",
        id: "steps",
        label: "_STEPS_",
        alwaysVisible: true,
        deselectable: true,
        search: true,
        data: dataSteps.value,
        keyLabelCallback: ({ item }) => `${ item.step } ${ item.name }`,
        keyId: "step",
      },
    ];
  });

  const stepsGroupsKeyByValue = computed(() => {
    return keyBy(stepsGroups.value, "value");
  });

  const dataTagsKeyByTag = computed(() => {
    return keyBy(dataTags.value, "tag");
  });

  const dataStepsKeyByStep = computed(() => {
    return keyBy(dataSteps.value, "step");
  });

  const filtersDataKeyBy = computed(() => {
    return {
      group: stepsGroupsKeyByValue.value,
      tagPresence: dataTagsKeyByTag.value,
      tagAbsence: dataTagsKeyByTag.value,
      steps: dataStepsKeyByStep.value,
    };
  });

  const updateQueryParams = () => {
    $router.push({ query: urlParams.value });
  };

  const filterQuery = ({ filter, currentQuery }) => {
    const CURRENT_MAPPING = filtersDataKeyBy.value[filter.id];

    return _filter(currentQuery, value => {
      return CURRENT_MAPPING[value];
    });
  };

  const setModelFromUrl = () => {
    const QUERY = cloneDeep($route.query);
    if (QUERY.name) {
      mainModel.value.name = QUERY.name;
      mainModelApplied.value.name = QUERY.name;
      delete QUERY.name;
    }
    forEach(filters.value, filter => {
      if (QUERY[filter.id]?.length) {
        appliedModel.value[filter.id] = filterQuery({ filter, currentQuery: QUERY[filter.id] });
      }
    });
    unappliedModel.value = cloneDeep(appliedModel.value);
    updateQueryParams();
  };

  const updateMainModel = model => {
    mainModel.value = model;
  };

  const updateAppliedModel = model => {
    appliedModel.value = model;
    mainModelApplied.value.name = mainModel.value.name;
    updateQueryParams();
  };

  const updateUnappliedModel = model => {
    unappliedModel.value = model;
  };

  const mainModelAppliedLowerCase = computed(() => {
    return toLower(mainModelApplied.value.name || "");
  });

  const isStepVisible = step => {
    if (mainModelAppliedLowerCase.value) {
      if (toLower(`${ step.name }`).indexOf(mainModelAppliedLowerCase.value) === -1) {
        return false;
      }
    }
    if (appliedModel.value.group?.length) {
      if (appliedModel.value.group.indexOf(step.groupId) === -1) {
        return false;
      }
    }
    if (appliedModel.value.steps?.length) {
      if (appliedModel.value.steps.indexOf(step.step) === -1) {
        return false;
      }
    }
    if (appliedModel.value.tagPresence?.length) {
      if (difference(appliedModel.value.tagPresence, step.tags).length !== 0) {
        return false;
      }
    }
    if (appliedModel.value.tagAbsence?.length) {
      if (intersection(appliedModel.value.tagAbsence, step.tags).length !== 0) {
        return false;
      }
    }

    return true;
  };

  const dataStepsFiltered = computed(() => {
    if (!mainModelAppliedLowerCase.value &&
      !appliedModel.value.group?.length &&
      !appliedModel.value.steps?.length &&
      !appliedModel.value.tagPresence?.length &&
      !appliedModel.value.tagAbsence?.length) {
      return dataSteps.value;
    }

    return _filter(dataSteps.value, step => {
      return isStepVisible(step);
    });
  });

  const toggleTagInModelTags = ({ tag }) => {
    const INDEX = appliedModel.value.tagPresence.indexOf(tag);

    if (INDEX === -1) {
      appliedModel.value.tagPresence.push(tag);
    } else {
      appliedModel.value.tagPresence.splice(INDEX, 1);
    }
    unappliedModel.value.tagPresence = cloneDeep(appliedModel.value.tagPresence);
  };

  const setModelEmpty = () => {
    appliedModel.value = {
      group: [],
      steps: [],
      tagPresence: [],
      tagAbsence: [],
    };
    unappliedModel.value = {
      group: [],
      steps: [],
      tagPresence: [],
      tagAbsence: [],
    };
  };

  return {
    appliedModel,
    dataStepsFiltered,
    filterMain,
    filters,
    mainModel,
    mainModelApplied,
    setModelEmpty,
    setModelFromUrl,
    toggleTagInModelTags,
    unappliedModel,
    updateAppliedModel,
    updateMainModel,
    updateUnappliedModel,
  };
}
