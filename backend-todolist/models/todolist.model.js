var mongoose = require('mongoose')

const TodoSchema  = new mongoose.Schema({
    title: String,
    description: String,
    archive: false
})

const Todo = mongoose.model('todos', TodoSchema)

module.exports = Todo;
