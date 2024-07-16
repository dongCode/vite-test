function render() {
    document.querySelector("#app").innerHTML = `
    <div>
      <h1>Hello Vite44!</h1>
    </div>
  `;
}

render()

if(import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if(newModule) {
      render()
    }
  });
}