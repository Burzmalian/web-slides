export class SlideListItem extends HTMLElement {
  get slideNumber() {
    return this.getAttribute("number");
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
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            font-family: "Montserrat", sans-serif;
          }
          li {
            display: flex;
            padding: 0;
            margin: 0 0 1.5rem 0;
            list-style: none;
            gap: 24px;
            align-items: flex-start;
            font-size: 1rem;
            line-height: 1.5;
          }
          .list__bullet {
            height: 50px;
            width: 50px;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 50%;
            box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
              0 3px 0 4px rgba(0, 0, 0, 0.05);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: cd-bounce-1 0.6s;
            animation-delay: calc(var(--animation-order) * 600ms);
            animation-fill-mode: forwards;
          }
          slot[name="icon"]::slotted(*) {
            margin-left: 1px;
            margin-top: 1px;
            font-size: 34px !important;
            color: white;
          }
          .list__text {
            background-color: white;
            padding: 8px 1rem 8px;
            border-radius: 8px;
            position: relative;
            box-shadow: 0 3px 0 #d8e5ee;
            align-self: center;
            opacity: 0;
            animation: text-in 0.6s;
            animation-delay: calc(var(--animation-order) * 600ms);
            will-change: transform;
            animation-fill-mode: forwards;
          }
          .list__text::before {
            position: absolute;
            content: "";
            width: 20px;
            height: 20px;
            border-radius: 3px;
            background-color: white;
            top: 10px;
            left: -4px;
            transform: rotate(45deg);
          }

          @keyframes text-in {
            from {
              transform: translateX(8px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes cd-bounce-1 {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            60% {
              opacity: 1;
              transform: scale(1.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @media screen and (min-width: 600px) {
            li {
              font-size: 1.5rem;
            }
            .list__text::before {
              top: 16px;
            }
          }
        </style>
        <li>
          <div
            class="list__bullet"
            style="--animation-order: ${this.slideNumber};"
          >
            <slot name="icon"></slot>
          </div>
          <div
            class="list__text"
            style="--animation-order: ${this.slideNumber};"
          >
            <slot name="text"></slot>
          </div>
        </li>
      `;
  }
}
