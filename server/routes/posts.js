import express from 'express';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// this is reached with: locahost:5000/posts
router.get('/', getPosts);

export default router;