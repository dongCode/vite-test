export const setTimer = () => {
  const el = document.querySelector("#timer");
  el.textContent = Date.now();
};
