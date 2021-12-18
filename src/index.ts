import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

//start the express server
app.use('/api', routes);
app.use(
  '/api/images',
  express.static('images/process_images', { extensions: ['jpg', 'jpeg'] })
);
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});

export default app;
