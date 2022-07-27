//router index file
import { Router } from 'express';
import MovieRouter from './MovieRouter';

const router = Router();

router.use('/movie', MovieRouter);

export default router;
