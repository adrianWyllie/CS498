var express = require('express');
var mustache = require('../common/mustache')
var router = express.Router();

/* GET login2 page */
router.get('/', function (req, res, next) {
	res.render('base_template', {
		title: 'Login2',
		body: mustache.render('login2')
	})
})

module.exports = router;