const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;

