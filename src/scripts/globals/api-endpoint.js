import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SMALL_IMAGE: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
  MEDIUM_IMAGE: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  LARGE_IMAGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
};

export default API_ENDPOINT;
