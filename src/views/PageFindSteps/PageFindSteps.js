import AFilters from "aloha-vue/src/AFilters/AFilters/AFilters";
import ATable from "aloha-vue/src/ATable/ATable";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import PageFindStepsName from "./PageFindStepsName/PageFindStepsName.vue";
import StepTags from "../../components/StepTags/StepTags.vue";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DataAPI from "./compositionAPI/DataAPI";
import FiltersAPI from "./compositionAPI/FiltersAPI";

export default {
  name: "PageFindSteps",
  components: {
    AFilters,
    ATable,
    ATranslation,
    PageFindStepsName,
    StepTags,
  },
  setup() {
    const {
      dataSteps,
    } = DataAPI();

    const {
      appliedModel,
      dataStepsFiltered,
      filterMain,
      filters,
      mainModel,
      mainModelApplied,
      unappliedModel,
      updateAppliedModel,
      updateMainModel,
      updateUnappliedModel,
    } = FiltersAPI({
      dataSteps,
    });

    const {
      columns,
    } = ColumnsAPI();

    return {
      appliedModel,
      columns,
      dataSteps,
      dataStepsFiltered,
      filterMain,
      filters,
      mainModel,
      mainModelApplied,
      unappliedModel,
      updateAppliedModel,
      updateMainModel,
      updateUnappliedModel,
    };
  },
};
