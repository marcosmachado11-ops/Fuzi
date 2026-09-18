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

// Execução de exemplo para o container ter algo pra mostrar no terminal
const manager = new TaskManager();
manager.addTask("Estudar Docker");
manager.addTask("Subir projeto no GitHub");
manager.addTask("Publicar imagem no Docker Hub");

console.log("Tarefas atuais:", manager.tasks);
