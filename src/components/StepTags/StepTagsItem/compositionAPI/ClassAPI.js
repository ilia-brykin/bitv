import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const isButton = toRef(props, "isButton");

  const classTagLocal = computed(() => {
    return isButton.value ? "a_btn_small" : "a_border a_px_2 a_py_1 a_d_inline_block a_fs_7";
  });

  return {
    classTagLocal,
  };
}
