const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const PostModel = require('./../model/postModel');

router.post('/add-post', async (req, res, next) => {
    const post = await PostModel.create({
        'title': req.body.url,
        'author': req.body.author,
        'url': '/read/' + req.body.url
    });

    fs.appendFile(path.join(__dirname, '../../_posts/' + req.body.url + '.md'), req.body.post, (error) => {
        if (error) {
            throw error;
        }

        console.log('New post created.', req.body.url);
    });

    res.json({ message: 'Post added.' });
});

router.post('/read-post', async (req, res, next) => {
    const postTitle = req.body.title;
    const post = await PostModel.findOne({ title: postTitle });

    if (!post) {
        next({ error: 'Post not found.' });
    }

    res.json({ post });
});

module.exports = router;
