import {
  computed,
  ref,
} from "vue";

import steps from "../../../global/consts/steps";
import {
  filter, forEach,
  toLower,
} from "lodash-es";
import { getTranslationKeyGroupName } from "../../../global/functions/utils";
import { getTranslatedText } from "aloha-vue/src/ATranslation/compositionAPI/UtilsAPI";

export default function FiltersAPI({
  dataSteps = computed(() => []),
}) {
  const filterMain = {
    type: "text",
    id: "name",
    label: "_STEP_NAME_",
  };
  const appliedModel = ref({
    group: [],
    steps: [],
  });
  const unappliedModel = ref({
    group: [],
    steps: [],
  });
  const mainModel = ref({
    name: "",
  });
  const mainModelApplied = ref({
    name: "",
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

      GROUPS.push({ value: getTranslatedText({ placeholder: GROUP_NAME }) });
      GROUPS_KEYS[step.group] = true;
    });

    return GROUPS;
  });

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
        keyLabel: "value",
        keyId: "value",
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

  const updateMainModel = model => {
    mainModel.value = model;
  };

  const updateAppliedModel = model => {
    appliedModel.value = model;
    mainModelApplied.value.name = mainModel.value.name;
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
      if (appliedModel.value.group.indexOf(step.group) === -1) {
        return false;
      }
    }
    if (appliedModel.value.steps?.length) {
      if (appliedModel.value.steps.indexOf(step.step) === -1) {
        return false;
      }
    }

    return true;
  };

  const dataStepsFiltered = computed(() => {
    if (!mainModelAppliedLowerCase.value &&
      !appliedModel.value.group?.length &&
      !appliedModel.value.steps?.length) {
      return dataSteps.value;
    }

    return filter(dataSteps.value, step => {
      return isStepVisible(step);
    });
  });

  return {
    appliedModel,
    dataStepsFiltered,
    filterMain,
    filters,
    mainModel,
    unappliedModel,
    updateAppliedModel,
    updateMainModel,
    updateUnappliedModel,
  };
}
