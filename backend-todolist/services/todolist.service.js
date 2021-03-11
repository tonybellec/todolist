const Todo = require("../models/todolist.model");

exports.getAll = async function () {
    try {
        return await Todo.find();
    } catch (e) {
        throw Error('Error while Requesting Todos')
    }
}

exports.getById = async function (id) {
    try {
        return await Todo.findById({_id: id});
    } catch (e) {
        // Log Errors
        throw Error('Error while Requesting Todo')
    }
}

exports.create = async function (todo) {
    try {
        let newTodo = new Todo();
        newTodo.title = todo.title;
        newTodo.description = todo.description;
        return await newTodo.save();
    } catch (e) {
        throw Error('Error while creating todo')
    }
}

exports.updateById = async function (todo,id) {
    try {
        return Todo.updateOne({_id : id}, todo);
    } catch (e) {
        // Log Errors
        throw Error('Error while Updating Todo')
    }
}

exports.deleteById = async function (id) {
    try {
        return Todo.deleteOne({_id: id});
    } catch (e) {
        throw Error('Error while Deleting Todo')
    }
}
