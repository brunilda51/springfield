/* eslint-disable */
import express = require("express");
const app = express();
import cors = require('cors');

// routes
import { getEmployees, getEmployee, addEmployee, deleteEmployee } from './routes/employees';

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({}));

app.get('/', (req : any, res : any) => res.send('Bla'));

// use Routes
app.use('/api/employees', getEmployees);

const port = process.env.PORT || 8082;

app.listen(port);