import {
  ref,
} from "vue";

export default function DropdownAPI() {
  const aDropdownRef = ref(undefined);

  const openDropdown = () => {
    aDropdownRef.value?.onOpen();
  };

  const closeDropdown = () => {
    aDropdownRef.value?.onClose();
  };

  return {
    aDropdownRef,
    closeDropdown,
    openDropdown,
  };
}
