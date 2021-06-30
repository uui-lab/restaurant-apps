import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': List, // default page
  '/list': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
