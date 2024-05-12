import ATable from "aloha-vue/src/ATable/ATable";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DataAPI from "./compositionAPI/DataAPI";

export default {
  name: "PageFindSteps",
  components: {
    ATable,
    ATranslation,
  },
  setup() {
    const {
      dataSteps,
    } = DataAPI();

    const {
      columns,
    } = ColumnsAPI();

    return {
      columns,
      dataSteps,
    };
  },
};
