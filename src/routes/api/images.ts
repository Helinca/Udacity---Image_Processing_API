import express from 'express';
import check from './check_and_respond';

const images = express.Router();

images.get('/', check);

export default images;
