const Todo = require("../models/todolist.model");

exports.getTodos = async function () {
    try {
        return await Todo.find();
    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

exports.createTodo = async function (todo) {
    try {
        let newTodo = new Todo();
        newTodo.title = todo.title;
        newTodo.description = todo.description;
        return await newTodo.save();
    } catch (e) {
        throw Error('Todo not created')
    }
}

exports.updateTodo = async function (todo,id) {
    try {
        return Todo.updateOne({_id : id}, todo);
    } catch (e) {
        // Log Errors
        throw Error('Error while Updating Todos')
    }
}

exports.deleteTodoById = async function (id) {
    try {
        return Todo.deleteOne({_id: id});
    } catch (e) {
        throw Error('Todo not deleted')
    }
}
