let Article = require('../controllers/article-controller')

module.exports = {
    find: function (req, res) {
        Article.findAll().then(function (doc) {
            res.json(doc);
          }).catch((err) =>{console.log(res.json(err))});
      },

    insert: function (req, res) {
        Article.create(req.body).then(function (doc) {
            res.json(doc);
          }).catch((err)=>{console.log(res.json(err))});
      },
    
    delete: function (req, res) {
        Article.remove({
            _id: req.paras.id
        }).then(function (doc) {
            res.json(doc);
          }).catch((err) =>{console.log(err)});
      }
}