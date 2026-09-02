const TaskManager = require('./index');

describe('TaskManager', () => {
  let taskManager;

  // Cria uma nova instância limpa antes de cada teste
  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test('deve inicializar com uma lista de tarefas vazia', () => {
    expect(taskManager.tasks).toEqual([]);
  });

  test('deve adicionar uma nova tarefa com sucesso', () => {
    taskManager.addTask('Estudar Jest');

    expect(taskManager.tasks.length).toBe(1);
    expect(taskManager.tasks[0]).toEqual({
      id: 1,
      title: 'Estudar Jest',
      completed: false
    });
  });

  test('deve remover uma tarefa existente pelo ID', () => {
    taskManager.addTask('Comprar café');
    const removido = taskManager.removeTask(1);

    expect(removido).toBe(true);
    expect(taskManager.tasks.length).toBe(0);
  });

  test('deve retornar false ao tentar remover uma tarefa inexistente', () => {
    const removido = taskManager.removeTask(99);

    expect(removido).toBe(false);
  });
});     