"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const express = require("express");
const app = express();
const cors = require("cors");
// routes
const employees_1 = require("./routes/employees");
// cors
app.use(cors({ origin: true, credentials: true }));
// Init Middleware
app.use(express.json({}));
app.get('/', (req, res) => res.send('Bla'));
// use Routes
app.use('/api/employees', employees_1.getEmployees);
const port = process.env.PORT || 8082;
app.listen(port);
//# sourceMappingURL=app.js.map