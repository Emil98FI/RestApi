const express = require('express');

const router = express.Router();


const Post = require('../models/post');




router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }

});


// Päivitetään dokumenttia
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: { title: req.body.title },
                $set: { description: req.body.description },
                $set: { rank: req.body.rank }
            }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;