import express from 'express';
import { register, userLogin } from '../controllers/login.js';

const router = express.Router();

router.post('/login', userLogin);

router.post('/register', register);

// router.post('/update', updatePost);

// router.post('/delete', deletePost);


export default router;