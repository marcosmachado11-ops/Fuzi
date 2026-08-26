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

  // Remove uma tarefa pelo ID
  removeTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);

    if (index === -1) {
      console.log(`❌ Tarefa com ID ${id} não encontrada.`);
      return false;
    }

    const [removedTask] = this.tasks.splice(index, 1);
    console.log(`🗑️ Tarefa "${removedTask.title}" (ID: ${id}) removida com sucesso!`);
    return true;
  }
}

module.exports = TaskManager;