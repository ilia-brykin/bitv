import {
  computed,
  ref,
} from "vue";

export default function ToggleAPI() {
  const isRubricOpen = ref(false);

  const iconToggleRubric = computed(() => {
    return isRubricOpen.value ? "DashCircle" : "PlusCircle";
  });

  const toggleRubric = () => {
    isRubricOpen.value = !isRubricOpen.value;
  };

  return {
    iconToggleRubric,
    isRubricOpen,
    toggleRubric,
  };
}
