
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }

    },
    {
       createdAt:true,
      updateAt:false,
    }


);

const Todos = mongoose.model("todos", todoSchema)
module.exports = Todos;
