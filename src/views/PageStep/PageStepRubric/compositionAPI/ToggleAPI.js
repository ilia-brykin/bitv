import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props) {
  const isRubricOpen = toRef(props, "isRubricOpen");

  const isRubricOpenLocal = ref(false);

  const iconToggleRubric = computed(() => {
    return isRubricOpenLocal.value ? "DashCircle" : "PlusCircle";
  });

  const toggleRubric = () => {
    isRubricOpenLocal.value = !isRubricOpenLocal.value;
  };

  const initIsRubricOpenLocal = () => {
    isRubricOpenLocal.value = isRubricOpen.value;
  };

  return {
    iconToggleRubric,
    initIsRubricOpenLocal,
    isRubricOpenLocal,
    toggleRubric,
  };
}
