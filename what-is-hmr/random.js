import { getRandom } from "./utils";

export const setRandom = () => {
  const el = document.querySelector("#random");
  el.textContent = getRandom() + "a";
};

export const count = 1;

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      // newModule is undefined when SyntaxError happened
      newModule.setRandom();
    }
  });
}
