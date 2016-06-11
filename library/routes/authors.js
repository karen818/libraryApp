var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/',function(req,res){
  knex('authors').then(function(result,err){
    console.log(result);
    res.render('authors/index',{authors:result});
  })
})

router.get('/new',function(req,res){

})



module.exports = router;


//******************CREATE**********************//
router.post('/authors', function(req, res) { //create
    var author = req.body;
    knex('authors').insert({
        name: author.name,
        age: author.age
    }).then(function(result) {
        res.redirect('/authors');
    });

});
