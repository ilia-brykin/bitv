export default function ColumnsAPI() {
  const columns = [
    {
      id: "step",
      label: "_STEP_NUMBER_",
      keyLabel: "step",
      to: {
        name: "PageStep",
        paramsDynamic: {
          step: "step",
        },
      },
      sortId: "step",
      width: 190,
      grow: 0,
    },
    {
      id: "name",
      label: "_STEP_NAME_",
      keyLabel: "name",
      sortId: "name",
      slot: "stepName",
    },
    {
      id: "group",
      label: "_STEP_GROUP_",
      keyLabel: "group",
      grow: 0,
    },
    {
      id: "tags",
      label: "_STEP_TAGS_",
      keyLabel: "tags",
      slot: "tags",
    },
    {
      id: "hasTests",
      label: "_STEP_TEST_PAGES_",
      keyLabel: "hasTests",
      sortId: "hasTests",
      width: 130,
      grow: 0,
    },
  ];

  return {
    columns,
  };
}
