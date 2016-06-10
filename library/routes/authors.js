var express = require('express');
var router = express.Router();
var knex = knex = require('../db/knex');

function Authors(){
    return knex('authors');
}

/* GET authors listing. */
router.get('/', function(req, res) {
    Authors().then(function(err, result){
        console.log(result);
        res.render('authors/index');
    })
});

module.exports = router;
