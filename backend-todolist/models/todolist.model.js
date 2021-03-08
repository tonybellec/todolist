var mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    title: String,
    description: String
})

const Todo = mongoose.model('todos', TodoSchema)

module.exports = Todo;
