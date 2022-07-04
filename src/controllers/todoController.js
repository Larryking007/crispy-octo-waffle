
const Todo = require("../model/Todo")

//get all todo tasks
exports.getAllTasks = async (req, res) => {
    try {
        let todos = await Todo.find();
        if(todos,length === 0)
        return res.status(404).json({
            success: false,
            message: "No Todos Found",
        });
        res.status(200).json({
            success: true,
            message: "Tasks found",
            Todos
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}

//add single todo task

//update todo task

//delete todo task

