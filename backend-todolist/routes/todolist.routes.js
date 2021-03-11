var express = require('express');
var router = express.Router();

var todolistController = require('../controllers/todolist.controller')

//GetAll
router.get('/', function(req, res) {
  todolistController.getAll(req, res).then(function (){
    res.send();
  })
});

//GetById
router.get('/:id', function(req, res) {
  todolistController.getById(req, res).then(function (){
    res.send();
  })
});

router.put('/:id', function(req, res, next) {
  todolistController.UpdateById(req, res).then(function (){
    res.send();
  })
});

//Post
router.post('/', function(req, res) {
  todolistController.create(req, res).then(function (){
    res.send();
  })
});

//DeleteById
router.delete('/:id', function(req, res) {
  todolistController.deleteById(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
