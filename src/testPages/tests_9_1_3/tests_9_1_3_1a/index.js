import {
  importAll,
} from "../../../global/functions/utils";

const de = importAll(require.context("./de", false, /\.html$/));
const ru = importAll(require.context("./ru", false, /\.html$/));

export default {
  ...de,
  ...ru,
};
