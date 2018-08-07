const express = require('express');
const router = express.Router();

const PostModel = require('./../model/postModel');

router.post('/add-post', async (req, res, next) => {
    const post = await PostModel.create({
        'title': req.body.title,
        'author': req.body.author,
        'url': req.body.url
    });

    res.json({ message: 'Post added.' });
});

router.post('/read-post', async (req, res, next) => {
    const postTitle = req.body.title;
    const post = await PostModel.findOne({ title: postTitle });

    if (!post) {
        res.json({ error: 'Post not found.' });
    }

    res.json({ post });
});

module.exports = router;
