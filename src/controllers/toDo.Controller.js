const toDoService = require('../service/toDo.Services')


const initialController = (req, res) => {
    console.log(req.headers['user-agent']);
    
    const response = toDoService.initialService();
    res.send(response);
  }



const findAllTasks = (req, res) => {
    res.send(toDoService.findAllTasks());
  };



const findById = (req, res) => {
    const id = parseInt(req.params.id);
    const find = toDoService.findById(id);

    if(find === undefined){
        res.status(204).send({ message: 'Nenhuma arefa encontrada' });
    }else{
        res.send({ message: 'Tarefa encontrada', find })
    };
};


const createTask = (req, res) => {
    const Task = req.body;
    const Tasks = toDoService.createTask(Task);
    res.send({ Tasks });
}


const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    res.send(toDoService.updateTask(id, updatedTask));
  };


const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = toDoService.deleteTask(id);
    res.send(deletedTask);
  };




  module.exports = {
    findAllTasks,
    findById,
    createTask,
    updateTask,
    deleteTask
  }
