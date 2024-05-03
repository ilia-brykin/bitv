export default function MenuItemsAPI() {
  const menuItems = [
    {
      id: "PageStart",
      label: "Start",
      to: {
        name: "PageStart",
      },
      icon: "Aloha",
    },
  ];

  return {
    menuItems,
  };
}
