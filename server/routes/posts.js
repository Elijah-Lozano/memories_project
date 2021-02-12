import express from 'express';

const router = express.Router();

// this is reached with: locahost:5000/posts
router.get('/', (req, res) => {
    res.send('This works');

});

export default router;