var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET New User page. */
router.get('/newbook', function(req, res) {
    res.render('book/new', { title: 'Add New book' });
});

module.exports = router;
