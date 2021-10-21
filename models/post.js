const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trime: true,
        require: true
    },
    author: {
        type: String,
        trime: true,
        require: true
    },
    description: {
        type: String,
        trim: true,
        require: true
    }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;