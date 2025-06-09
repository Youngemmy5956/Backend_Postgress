import { Router } from 'express';
import { IndexController } from '../controllers';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/items', indexController.getItems.bind(indexController));
    app.post('/items', indexController.createItem.bind(indexController));
}