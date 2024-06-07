import {
  computed,
} from "vue";
import {
  useRoute,
} from "vue-router";

export default function ColumnsAPI() {
  const $route = useRoute();

  const columns = computed(() => {
    return [
      {
        label: "_LABEL_NAME_",
        id: "test",
        keyLabel: "name",
        to: {
          name: "PageStepTest",
          params: {
            step: $route.params.step,
          },
          paramsDynamic: {
            test: "test",
          },
        },
      },
    ];
  });

  return {
    columns,
  };
}
