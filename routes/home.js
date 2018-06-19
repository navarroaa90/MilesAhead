var express = require('express');
var router = express.Router();

/* Get Home Page */
router.get('/home', function(req, res, next) {
    res.render('home', { title: "Home"});
});

module.exports = router