var express = require('express');
var router = express.Router();

var todolistController = require('../controllers/todolist.controller')

//GetAll
router.get('/', function(req, res) {
  todolistController.getTodos(req, res).then(function (){
    res.send();
  })
});

router.put('/:id', function(req, res, next) {
  todolistController.UpdateTodo(req, res).then(function (){
    res.send();
  })
});

//Post
router.post('/', function(req, res) {
  todolistController.createTodo(req, res).then(function (){
    res.send();
  })
});

//DeleteById
router.delete('/:id', function(req, res) {
  todolistController.deleteTodoById(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
