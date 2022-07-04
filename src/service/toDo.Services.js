const Task = require("../models/Task");

// const Tasks = [
//   {
//     id: 1,
//     task: "estudar",
//     details: "material da semana",
//   },
//   {
//     id: 2,
//     task: "lavar o carro",
//     details: "aspirar, passar preto e silicone",
//   },
// ];

const findAllTasks = async () => {
  const Tasks = await Task.find();
  return Tasks;
};

const findById = async (id) => {
  return await Task.findById(id);
};

const createTask = async (newTask) => {
  await Task.create(newTask);
};

const updateTask = async (id, updatedTask) => {
  return await Task.findByIdAndUpdate(id, updatedTask);
};

const deleteTask = async (id) => await Task.findByIdAndDelete(id);

module.exports = {
  findAllTasks,
  findById,
  createTask,
  updateTask,
  deleteTask,
};
