/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
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
          margin-top: 1rem !important;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media screen and (min-width: 320px) {
          :host {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 425px) {
          :host {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 768px) {
          :host {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 1024px) {
          :host {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 1366px) {
          :host {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 1440px) {
          :host {
            grid-template-columns: repeat(7, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 1600px) {
          :host {
            grid-template-columns: repeat(8, minmax(0, 1fr));
          }
        }
      </style>
    `;

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.shadowDOM.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
