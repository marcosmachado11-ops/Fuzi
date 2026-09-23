const TaskManager = require('./index.js'); // Ou o caminho correto do seu arquivo TaskManager

describe('TaskManager', () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test('Deve adicionar uma tarefa com sucesso', () => {
    taskManager.addTask('Estudar GitHub Actions');
    expect(taskManager.tasks.length).toBe(1);
    expect(taskManager.tasks[0].title).toBe('Estudar GitHub Actions');
  });

  test('Deve remover uma tarefa pelo ID', () => {
    taskManager.addTask('Tarefa 1');
    const result = taskManager.removeTask(1);
    expect(result).toBe(true);
    expect(taskManager.tasks.length).toBe(0);
  });
});