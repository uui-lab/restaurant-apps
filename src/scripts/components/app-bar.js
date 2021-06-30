class AppBar extends HTMLElement {
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
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :host {
          box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.5);
          display: block;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        a {
          text-decoration: none;
          color: black;
          min-width: 44px;
          min-height: 44px;
        }

        .title {
          padding: 1rem;
          display: inline-block;
        }

        button {
          min-width: 44px;
          min-height: 44px;
          margin: 0 1rem;
          background-color: unset;
          border: none;
          cursor: pointer;
        }

        span {
          border-radius: 50%;
          padding: 0.5rem;
        }

        span:hover, li a:hover {
          background-color: #ff1744;
          color: white;
        }

        nav {
          background-color: white;
          width: 0;
          height: 100%;
          position: fixed;
          overflow: hidden;
          transition: 0.5s;
        }

        ul {
          list-style: none;
        }

        li a {
          padding: 1rem 1rem;
          display: block;
        }

        .open {
          width: 100%;
        }

        @media screen and (min-width: 768px) {
          :host {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          button {
            display: none;
          }

          nav {
            display: unset;
            background-color: unset;
            width: unset;
            height: unset;
            position: unset;
            overflow: unset;
            transition: unset;
          }

          li {
            display: inline-block;
          }

          li a {
            padding: 1rem 1rem;
          }

          .open {
            width: unset;
          }
        }
      </style>
      <div>
        <a class="title" href="./">Restonesia</a>
        <button aria-label="menu">
          <span class="material-icons">menu</span>
        </button>
      </div>
      <nav>
        <ul>
          <li><a href=".">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/ilham-ramadhan-1077361a3/">About Us</a></li>
        </ul>
      </nav>
    `;

    this.shadowDOM.querySelector('button').addEventListener('click', () => {
      const menu = this.shadowDOM.querySelector('nav');
      menu.classList.toggle('open');

      if (menu.classList.contains('open')) {
        this.shadowDOM.querySelector('.material-icons').innerHTML = 'close';
      } else {
        this.shadowDOM.querySelector('.material-icons').innerHTML = 'menu';
      }

      document.body.classList.toggle('lock');

      // eslint-disable-next-line no-restricted-globals
      event.stopPropagation();
    });
  }
}

customElements.define('app-bar', AppBar);
