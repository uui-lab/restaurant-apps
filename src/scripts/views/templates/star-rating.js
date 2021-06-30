/* eslint-disable no-plusplus */
const displayStarRating = (rating, total) => {
  let star = '';
  const fullStar = Math.trunc(rating);
  star += printStarFull(fullStar);

  let emptyStar = total - fullStar;

  const hasHalfStar = (rating - fullStar) >= 0.5;
  if (hasHalfStar) {
    star += printStarHalf();
    emptyStar--;
  }

  console.log(emptyStar);
  if (emptyStar >= 1) {
    star += printStarEmpty(emptyStar);
  }

  return star;
};

const printStarFull = (count) => {
  let star = '';
  for (let i = 0; i < count; i++) {
    star += `<i class="fa fa-star fa-fw" aria-hidden="true"></i>`;
  }
  return star;
}

const printStarHalf = () => `<i class="fa fa-star-half-o fa-fw" aria-hidden="true"></i>`;

const printStarEmpty = (count) => {
  let star = '';
  for (let i = 0; i < count; i++) {
    star += `<i class="fa fa-star-o fa-fw" aria-hidden="true"></i>`;
  }
  return star;
}

export default displayStarRating;
