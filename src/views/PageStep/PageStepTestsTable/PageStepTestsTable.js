import ATable from "aloha-vue/src/ATable/ATable";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import RowsAPI from "./compositionAPI/RowsAPI";

export default {
  name: "PageStepTestsTable",
  components: {
    ATable,
  },
  props: {
    currentStep: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      columns,
    } = ColumnsAPI();

    const {
      rows,
    } = RowsAPI(props);

    return {
      columns,
      rows,
    };
  },
};
