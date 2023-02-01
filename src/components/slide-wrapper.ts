import logo from "/logo.svg";

export class SlideWrapper extends HTMLElement {
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
          .container {
            margin: 0 auto;
            max-width: 800px;
            background: #e8eff5;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #7a0019;
            height: 120px;
          }
          .header img {
            width: 90%;
          }
          @media screen and (min-width: 600px) {
            .header img {
              width: 70%;
            }
          }
          .image {
            width: auto;
            max-width: 100%;
            height: 200px;
            position: relative;
          }
          @media screen and (min-width: 600px) {
            .image {
              height: 250px;
            }
          }
          .image img {
            object-fit: cover;
            position: absolute;
            height: 100%;
            width: 100%;
          }
          .content {
            padding: 2rem;
          }
          .list {
            margin: 0 0 2rem 0;
            padding: 0;
          }
        </style>
        <div class="container">
          <div class="header">
            <img src="${logo}" alt="" />
          </div>
          <div class="image">
            <img src="${this.slideImage}" alt="" />
          </div>
          <div class="content">
            <ul class="list">
              <slot></slot>
            </ul>
          </div>
        </div>
      `;
  }
}
