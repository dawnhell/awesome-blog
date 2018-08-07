const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;
