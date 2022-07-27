import { Router } from 'express';
import { MovieController } from '../controllers';

const router: Router = Router();

router.post('/', MovieController.createMovie);

export default router;
