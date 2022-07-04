const {Schema, model} = require("mongoose") 

const todoSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    age: {
        type: Number,
        default: null,
    },
    isUser: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }, 
},
 { timestamps: true }
);
const todoModel = model("todos", todoSchema);

module.exports = todoModel;