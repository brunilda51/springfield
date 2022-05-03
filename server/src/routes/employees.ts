import express = require("express");
import fs = require("fs");
import path = require("path");
const router = express.Router();

const getEmployees = router.get('/', (req: any, res: any) => {
  const users = fs.readFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json').toString();
  res.send(users);
});

const getEmployee = router.get('/:id', (req: any, res: any) => {
  const users = fs.readFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json').toString();
  res.send(JSON.parse(users).filter((user: any) => user.id === req.params.id));
});

const addEmployee = router.post('/', (req: any, res: any) => {
  const users = JSON.parse(fs.readFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json').toString());
  const newUser = { ...req.body, id: Math.floor(Math.random() * 1000) }
  users.push(newUser);
  fs.writeFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json', JSON.stringify(users));
  res.send(users);
});

const deleteEmployee = router.delete('/:id', (req: any, res: any) => {
  const users = fs.readFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json');
  const filteredUsers = JSON.parse(users.toString()).filter((user: any) => user.id.toString() !== req.params.id.toString());
  fs.writeFileSync('/Users/brunildametaj/Desktop/springfield/server/src/users.json', JSON.stringify(filteredUsers));
  res.send(filteredUsers);
});



export { getEmployees, getEmployee, addEmployee, deleteEmployee }