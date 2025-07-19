const express = require("express");
const app = express();

app.use(express.json())

let todo = [];
let todoCount = 1;

app.post('/todo',(req,res)=>{
    const{task, completed} = req.body;
    console.log(req.body);

    if(!task){
        return res.status(400).json({
            message: "task is required",
        });
    }

    const newtodo = {
       id: todoCount++,
       task,
       completed
    }

    

    todo.push(newtodo);
    res.status(201).json({
        message:"task is added",
        todo: newtodo
    })
})

app.get("/todo", (req,res)=>{
    res.status(200).json({
        message:"task fetch successfully",
        todo
    })
})

module.exports = app;