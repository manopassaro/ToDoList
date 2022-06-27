const express = require('express');
const toDoController = require('../controllers/toDo.Controller');
const router = express.Router();



router.get('/', toDoController.findAllTasks);
router.get('/task/:id', toDoController.findById);
router.post('/create/task', toDoController.createTask);
router.put('/updateTask/:id', toDoController.updateTask);
router.delete('/deleteTask/:id', toDoController.deleteTask);



module.exports = router;
