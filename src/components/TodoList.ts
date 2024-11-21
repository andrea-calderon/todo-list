import TodoItem from './TodoItem';

export default class TodoList {
  private todos: { id: number; text: string; completed: boolean }[] = [];
  private container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'todo-list';
  }

  private addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false };
    this.todos.push(newTodo);
    this.renderTodos(); // Llamamos solo cuando agregamos una nueva tarea
  }

  private deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.renderTodos(); // Llamamos solo cuando eliminamos una tarea
  }

  private toggleTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.renderTodos(); // Llamamos solo cuando togglamos una tarea
  }

  private renderTodos() {
    const list = this.container.querySelector('.todo-items') as HTMLUListElement;
    list.innerHTML = '';  // Limpiar la lista antes de volver a renderizar

    this.todos.forEach((todo) => {
      const todoItem = new TodoItem(todo, this.deleteTodo.bind(this), this.toggleTodo.bind(this));
      list.appendChild(todoItem.render()); // Renderizar una tarea
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="todo-header">
        <h1>Todo List</h1>
        <input type="text" class="todo-input" placeholder="Add a new task..." />
        <button class="add-btn">Add</button>
      </div>
      <ul class="todo-items"></ul>
    `;

    const input = this.container.querySelector('.todo-input') as HTMLInputElement;
    const addButton = this.container.querySelector('.add-btn') as HTMLButtonElement;

    addButton.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
        this.addTodo(text);  // Llamar a addTodo
        input.value = '';  // Limpiar el input después de agregar
      }
    });

    return this.container;
  }
}
