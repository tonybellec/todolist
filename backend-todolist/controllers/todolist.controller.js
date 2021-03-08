let TodolistService = require('../services/todolist.service')

exports.getTodos = async function (req, res) {
    try {
        let todos = await TodolistService.getTodos()
        res.status(200).json({ status: 200, data: todos, message: "Successfully Todos search" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createTodo = async function (req, res) {
    try {
        let todo = await TodolistService.createTodo(req.body);
        res.status(200).json({ status: 200, data: todo, message: "Successfully Todo Created"  });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteTodoById = async function (req, res) {
    try {
        let todo = await TodolistService.deleteTodoById(req.params.id)
        res.status(200).json({ status: 200, data: todo, message: "Successfully Todo Deleted" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}