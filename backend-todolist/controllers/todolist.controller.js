let TodolistService = require('../services/todolist.service')

exports.getAll = async function (req, res) {
    try {
        let todos = await TodolistService.getAll()
        res.status(200).json({ status: 200, data: todos, message: "Successfully Todos search" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getById = async function (req, res) {
    try {
        let todo = await TodolistService.getById(req.params.id)
        res.status(200).json({ status: 200, data: todo, message: "Successfully Todo Gotten" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.create = async function (req, res) {
    try {
        let todo = await TodolistService.create(req.body);
        res.status(200).json({ status: 200, data: todo, message: "Successfully Todo Created"  });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.UpdateById = async function (req, res) {
    try {
        await TodolistService.updateById(req.body,req.params.id);

        let todo = await TodolistService.getById()

        res.statusCode = 200;
        res.json = { status: 200, data: todo, message: "Successfully Todo Updated" };
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteById = async function (req, res) {
    try {
        let todo = await TodolistService.deleteById(req.params.id)
        res.status(200).json({ status: 200, data: todo, message: "Successfully Todo Deleted" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}
