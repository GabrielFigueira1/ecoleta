import express, { request, response } from 'express';
import path from 'path';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

routes.post('/points', upload.single('fotos'),pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

export default routes;