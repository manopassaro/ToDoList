const Tasks = [
    {
        id: 1,
        task: "estudar",
        details: "material da semana", 
    },
    {
        id: 2,
        task: "lavar o carro",
        details: "aspirar, passar preto e silicone"
    }
];


const findAllTasks = () => Tasks;

const findById = (id) => {
    const byId = Tasks.map((Task) => {        
        if (Task.id === id) {        
            return Task;
        }else{
            Task = undefined;
            return Task;
        }
    });
    
    return byId;
};

const createTask = (Task) => {
    Tasks.push(Task);
    return Tasks;
};

const updateTask = (id, updatedTask) => {
    Tasks.forEach((Task) => {
        if (Task.id === id){
            Task = updatedTask;
        }
    });
    return Tasks;
};


const deleteTask = (id) => {
    Tasks.forEach((Task, index) => {
      if (Task.id === id) {
        Tasks.splice(index, 1);
      }
    });
  };







module.exports = {
    findAllTasks,
    findById,
    createTask,
    updateTask,
    deleteTask
};
