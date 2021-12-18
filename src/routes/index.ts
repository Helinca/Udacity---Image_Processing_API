//define a route for image page
import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Main api. Use /images');
});
routes.use('/images', images);

export default routes;
