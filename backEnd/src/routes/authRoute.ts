import { Router } from 'express';
import { test, authLogin} from '../controllers/authController';

const router = Router();

router.get('/test', test);
router.post('/login', authLogin);


export default router;
