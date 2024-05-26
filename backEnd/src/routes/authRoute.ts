import { Router } from 'express';
import {  authLogin} from '../controllers/authController';

const router = Router();
router.post('/login', authLogin);


export default router;
