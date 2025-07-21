const express = require("express");
const app = express();

app.use(express.json())

let todo = [];
let todoCount = 0;

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
        // todo: newtodo
    })
})

app.get("/todo", (req,res)=>{
    res.status(200).json({
        message:"task fetch successfully",
        todo
    })
})

app.patch("/todo/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const {task} = req.body;

    const index = todo.findIndex(item =>item.id === id)

    if(index === -1){
        return  res.status(404).json({
            message : "task not found"
        })
    }

    if(!task){
        return res.status(400).json({
            message: "task is required"
        })
    }

    todo[index].task = task
    res.status(200).json({
        message : "task updated successfully",
        todo: todo[index]
    })
})

app.delete("/todo/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const index = todo.findIndex(item=> item.id === id)

    if(index === -1){
        return res.status(404).json({
            message :" task not found"
        })
    }

    const deletetodo = todo.splice(index, 1)[0]
    res.status(200).json({
        message :" task deleted successfully",
        todo : deletetodo
    })
})
module.exports = app;