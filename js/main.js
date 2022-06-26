// including html files in index.html
// $(function () {
//   var includes = $("[data-include]");
//   $.each(includes, function () {
//     var file = $(this).data("include");
//     $(this).load(file);
//   });
// });

// let includes = document.querySelectorAll('[data-include]')
// includes.forEach(includes, ()=>{
//   let file =
// })

class HTMLInclude extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Loading...";
    this.loadContent();
  }

  async loadContent() {
    const source = this.getAttribute("src");
    if (!source) {
      throw new Error("No src attribute given.");
    }
    const response = await fetch(source);
    if (response.status !== 200) {
      throw new Error(`Could not load resource: ${source}`);
    }
    const content = await response.text();
    this.innerHTML = content;
  }
}

window.customElements.define("html-include", HTMLInclude);
