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
          h1 {
            font-weight: 600;
            font-size: 2rem;
            line-height: 1.1;
            margin: 0 0 2.5rem 0;
          }
          @media screen and (min-width: 600px) {
            h1 {
              font-size: 3rem;
            }
          }
        </style>
        <h1><slot></slot></h1>
      `;
  }
}
