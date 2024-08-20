import { getRandom } from "./utils";

export const setRandom = () => {
  const el = document.querySelector("#random");
  el.textContent = getRandom();
};
