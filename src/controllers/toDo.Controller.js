const toDoService = require("../service/toDo.Services");

// const initialController = (req, res) => {
//   console.log(req.headers["user-agent"]);

//   const response = toDoService.initialService();
//   res.send(response);
// };

const findAllTasks = async (req, res) => {
  Tasks = await toDoService.findAllTasks();

  if (Tasks.length == 0) {
    return res.status(206).send({ message: "Nenhuma tarefa cadastrada." });
  }

  res.send(Tasks);
};

const findById = async (req, res) => {
  const id = req.params.id;

  const find = await toDoService.findById(id);

  if (!find) {
    return res.status(206).send({ message: "Nenhuma tarefa encontrada" });
  }

  res.send({ message: "Tarefa encontrada", find });
};

const createTask = (req, res) => {
  const newTask = req.body;

  const Tasks = toDoService.createTask(newTask);

  res.status(206).send({ Tasks });
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const updateTask = req.body;

  const Task = await toDoService.findById(id);

  const updatedTask = await paletasService.updatePaleta(id, updateTask);

  res.send(updatedTask);
}



const deleteTask = async (req, res) => {
  const id = req.params.i;
  
  await toDoService.deleteTask(id);
  res.send({message: 'Tarefa executada com sucesso!'});
};

module.exports = {
  findAllTasks,
  findById,
  createTask,
  updateTask,
  deleteTask,
};
