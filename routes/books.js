var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bookcollection');

  collection.insert({
      "title" : req.body.title,
      "author" : req.body.author
  }, function (err, doc) {
      if (err) {
          res.send("There was a problem adding the information to the database.");
      }
      else {
          res.statusCode = 200
          res.send({});
        }
  });
});

router.delete('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bookcollection');
  var book_id = req.body.book_id
  collection.remove({_id: book_id }, function (err, result){
    if (err) {
        res.statusCode = 403;
        res.send(err);
    } else {
        res.statusCode = 200;
        res.send({});
    }
  });
});

router.put('/:book_id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bookcollection');
  var book_id = req.params.book_id

  collection.update({"_id" : book_id}, {"title" : req.body.title, "author" : req.body.author},
                    function(err, result) {
                      if (err) {
                        res.statusCode = 500
                        res.send("There was a problem adding the information to the database.");
                      }
                      else {
                        res.statusCode = 200
                        res.send({});
                      }
  });
});

router.get('/:book_id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bookcollection');
  var book_id = req.params.book_id
  collection.findOne({"_id" : book_id},{},function(err ,docs){
    if (err) {
      res.statusCode = 500
      res.send("There was a problem adding the information to the database.");
    }
    else {
      res.render('book/book', {
          "book" : docs,
          scripts: ['javascripts/book.js']
      });
    }
  });
});

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('bookcollection');
    collection.find({},{},function(err, docs){
      if (err) {
          res.statusCode = 500
          res.send("There was a problem adding the information to the database.");
      }
      else {
        res.render('book/books', {
            "booklist" : docs
        });
      }
    });
});

module.exports = router;
