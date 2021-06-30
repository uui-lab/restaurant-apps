class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :host {
          height: 55vw;
          max-height: 900px;
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/heros/hero-image_2.jpg);
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        p {
          font-size: large;
        }

        @media screen and (min-width: 320px) {
          :host {
            height: 50vw;
          }

          p {
            font-size: x-large;
          }
        }

        @media screen and (min-width: 540px) {
          p {
            font-size: xx-large;
          }
        }

        @media screen and (min-width: 768px) {
          :host {
            height: 25vw;
          }

          p {
            font-size: 2rem;
          }
        }

        @media screen and (min-width: 1024px) {
          p {
            font-size: 3rem;
          }
        }
      </style>
      <p>Nikmati Beragam Hidangan<br>dari Beragam Daerah</p>
    `;
  }
}

customElements.define('hero-element', HeroElement);
