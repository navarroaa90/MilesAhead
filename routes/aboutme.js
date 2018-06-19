var express = require('express');
var router = express.Router();

/* Get About Me Page */
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', { title: "About Me"});
});

module.exports = router;