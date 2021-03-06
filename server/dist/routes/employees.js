"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.addEmployee = exports.getEmployee = exports.getEmployees = void 0;
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const usersFile = path.join(__dirname, '..', '..', `users.json`);
const getEmployees = router.get('/', (req, res) => {
    const users = fs.readFileSync(usersFile).toString();
    res.send(users);
});
exports.getEmployees = getEmployees;
const getEmployee = router.get('/:id', (req, res) => {
    const users = fs.readFileSync(usersFile).toString();
    res.send(JSON.parse(users).filter((user) => user.id === req.params.id));
});
exports.getEmployee = getEmployee;
const addEmployee = router.post('/', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile).toString());
    const newUser = Object.assign(Object.assign({}, req.body), { id: Math.floor(Math.random() * 1000) });
    users.push(newUser);
    fs.writeFileSync(usersFile, JSON.stringify(users));
    res.send(users);
});
exports.addEmployee = addEmployee;
const deleteEmployee = router.delete('/:id', (req, res) => {
    const users = fs.readFileSync(usersFile);
    const filteredUsers = JSON.parse(users.toString()).filter((user) => user.id.toString() !== req.params.id.toString());
    fs.writeFileSync(usersFile, JSON.stringify(filteredUsers));
    res.send(filteredUsers);
});
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employees.js.map