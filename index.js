class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Adiciona uma nova tarefa
  addTask(title) {
    const task = {
      id: this.tasks.length + 1,
      title: title,
      completed: false
    };
    this.tasks.push(task);
    console.log(`✅ Tarefa "${title}" adicionada com sucesso!`);
  }


}

module.exports = TaskManager;