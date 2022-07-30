import express from 'express';
import { createPost, deletePost, getPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPost);

router.post('/', createPost);

router.post('/update', updatePost);

router.post('/delete', deletePost);


export default router;