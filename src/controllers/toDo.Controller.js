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


  module.exports = {
    findAllTasks,
    findById,
    createTask
  }
