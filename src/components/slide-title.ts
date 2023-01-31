export class SlideTitle extends HTMLElement {
  get slideTitle() {
    return this.getAttribute("title");
  }

  get slideImage() {
    return this.getAttribute("image");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = /* HTML */ `
        <style>
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            font-family: "Montserrat", sans-serif;
          }
        </style>
        <h1>sadfsadf</h1>
      `;
  }
}
