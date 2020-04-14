const express = require('express');

const router = express.Router();


const Post = require('../models/post');





//Ilman Id:ta url palkissa nähdään kaikki dokumentit

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }

});


// Haetaan dokumentti Id:lla URL palkissa

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
