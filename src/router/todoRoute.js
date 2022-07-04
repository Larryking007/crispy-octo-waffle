const router = require('express').Router();
const controller = require('../controllers/todoController');


router
.get('/', controller.getAllTasks)
.get('/:id', controller.getSingleTask)
.post('/', controller.createTask)
.put('/:id', controller.updateTask)
.delete('/:id', controller.deleteTask)
;

module.exports = router;

