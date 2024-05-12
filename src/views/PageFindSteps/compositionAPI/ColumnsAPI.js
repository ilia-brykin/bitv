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
      to: {
        name: "PageStep",
        paramsDynamic: {
          step: "step",
        },
      },
    },
    {
      id: "tags",
      label: "_STEP_TAGS_",
      keyLabel: "tags",
      slot: "tags",
    },
  ];

  return {
    columns,
  };
}
