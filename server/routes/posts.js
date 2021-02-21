import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// this is reached with: localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
// patch is used  for updating existing documents
router.patch('/:id', updatePost);

export default router;