let db = require('../models');

module.exports = {
    save: (req, res)=> {
        db.Article.findOne({articleId: req.body.articleId})
                .then((response) => {
                    if(response === null){
                        db.Article.create(req.body)
                                .then((response) =>{
                                    console.log(response);
                                })
                                .catch((err)=>{res.json(err)});
                    }
                })
    },

    getSavedArticle: (req, res) =>{
        db.Article.find({})
            .sort({date: -1})
            .then((data) =>{res.json(data)})
            .catch((err) =>{res.json(err)});
    },

    deleteSavedArticle: (req, res) =>{
        db.Article.remove({articleId: req.body.articleId}, (err) =>{
            if(err) throw err;
            console.log('Article has been deleted');
            db.Article.find({})
                .sort({date: -1})
                .then((data) =>{res.json(data)})
                .catch((err) =>{res.json(err)})
        }).catch((err) =>{res.json(err)})
    }
};