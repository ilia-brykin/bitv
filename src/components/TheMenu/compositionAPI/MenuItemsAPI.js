import StepsAPI from "./StepsAPI";

export default function MenuItemsAPI() {
  const {
    steps,
  } = StepsAPI();

  const menuItems = [
    {
      id: "PageStart",
      label: "_START_PAGE_",
      to: {
        name: "PageStart",
      },
      icon: "House",
    },
    ...steps,
  ];

  return {
    menuItems,
  };
}
