import express from 'express';
import { authController } from './controllers/auth.controller';
import { authMiddleware } from './middlewares/auth.middleware';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World from router !');
});

router.get('/auth', authMiddleware, authController);

export default router;
