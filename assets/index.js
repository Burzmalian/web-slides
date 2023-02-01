(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class a extends HTMLElement{get slideImage(){return this.getAttribute("image")}get slideLogo(){return this.getAttribute("logo")}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
            <img src="${this.slideLogo}" alt="" />
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
      `)}}class l extends HTMLElement{get slideNumber(){return this.getAttribute("number")}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
      `)}}class d extends HTMLElement{get slideTitle(){return this.getAttribute("title")}get slideImage(){return this.getAttribute("image")}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
      `)}}customElements.define("slide-wrapper",a);customElements.define("slide-list-item",l);customElements.define("slide-title",d);
