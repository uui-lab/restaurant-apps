import API_ENDPOINT from '../../globals/api-endpoint';
import displayStarRating from './star-rating';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__image" alt="${restaurant.name}"
        src="${API_ENDPOINT.SMALL_IMAGE(restaurant.pictureId)}">
      <div class="restaurant-item__header__city">
        <p>Kota ${restaurant.city}</p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <p>Rating: <i class="fa fa-star fa-fw" aria-hidden="true"></i> ${restaurant.rating}</p>
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <img
    class="restaurant__image"
    src="${API_ENDPOINT.SMALL_IMAGE(restaurant.pictureId)}"
    alt="${restaurant.name}"
  >
  <div class="restaurant__info">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <h3 class="restaurant__rating">
      <span class="restaurant__rating__star">${displayStarRating(restaurant.rating, 5)}</span>
      <span class="restaurant__rating__score">${restaurant.rating}</span>
    </h3>
    <h3 class="restaurant__address">
      <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
      <span>${restaurant.address}, ${restaurant.city}</span>
    </h3>
    <div class="restaurant__categories">
      <h3>Categories</h3>
      <ul>
        ${restaurant.categories.map((category) => `
          <li>${category.name}</li>
        `).join('')}
      </ul>
    </div>
  </div>
  <p class="restaurant__description">${restaurant.description}</p>
  <div class="restaurant__menu">
    <h3>Menu</h3>
    <div class="restaurant__menu__foods">
      <h4>Makanan</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `
          <li><i class="fa fa-cutlery fa-fw" aria-hidden="true"></i> ${food.name}</li>
        `).join('')}
      </ul>
    </div>
    <div class="restaurant__menu__drinks">
      <h4>Minuman</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `
          <li><i class="fa fa-glass fa-fw" aria-hidden="true"></i> ${drink.name}</li>
        `).join('')}
      </ul>
    </div>
  </div>
  <div class="restaurant__customer-reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews.map((customerReview) => `
        <li class="restaurant__customer-reviews__review">
          <h4>${customerReview.name}</h4>
          <p class="restaurant__customer-reviews__review__date">${customerReview.date}</p>
          <p>${customerReview.review}</p>
        </li>
      `).join('')}
    </ul>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
