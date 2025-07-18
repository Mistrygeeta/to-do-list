const express = require("express");

const app = express();
app.use(express.json());

const todos = []

app.post("/todos",(req,res)=>{
    console.log(req.body)
    todos.push(req.body)
    res.status(201).json({
        message:"task added successfully"
    })
})

app.get("/todos", (req, res)=>{
    res.status(200).json({
        message:"task fetched successfully",
        todos
    })
})

module.exports = app;