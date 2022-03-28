const express = require ("express");
const app = express();

app.use(express.json());

const {register,login} = require("./controllers/auth.controller")
app.post("/register",register);
app.post("/login",login);

const UserController = require("./controllers/user.controller")
app.use("/users",UserController);


const todoController = require("./controllers/todo.controller")
app.use("/todos",todoController);


module.exports = app;