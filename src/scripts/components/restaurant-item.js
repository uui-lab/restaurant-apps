/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
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
          box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
          border-radius: 0.25rem;
          display: flex;
          flex-direction: column;
        }

        .image {
          background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${this._restaurant.pictureId});
          background-size: cover;
          height: 40vw;
        }

        .image > p {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem;
          color: white;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        }

        .detail {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .name {
          color: red;
          flex: 1;
          margin: 0.5rem 0;
        }

        .description {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }

        @media screen and (min-width: 320px) {
          .image {
            height: 35vw;
          }
        }

        @media screen and (min-width: 375px) {
          .image {
            height: 30vw;
          }
        }
        
        @media screen and (min-width: 425px) {
          .image {
            height: 25vw;
          }
        }

        @media screen and (min-width: 540px) {
          .image {
            height: 20vw;
          }
        }

        @media screen and (min-width: 768px) {
          .image {
            height: 15vw;
          }
        }

        @media screen and (min-width: 1366px) {
          .image {
            height: 10vw;
          }
        }
      </style>
      <div class="image">
        <p>Kota ${this._restaurant.city}</p>
      </div>
      <div class="detail">
        <p class="rating">Rating: ${this._restaurant.rating}</p>
        <p class="name" tabindex="0">${this._restaurant.name}</p>
        <p class="description">${this._restaurant.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
