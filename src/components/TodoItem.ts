export default class TodoItem {
  private todo: { id: number; text: string; completed: boolean };
  private deleteCallback: (id: number) => void;
  private toggleCallback: (id: number) => void;

  constructor(
    todo: { id: number; text: string; completed: boolean },
    deleteCallback: (id: number) => void,
    toggleCallback: (id: number) => void
  ) {
    this.todo = todo;
    this.deleteCallback = deleteCallback;
    this.toggleCallback = toggleCallback;
  }

  render() {
    const li = document.createElement('li');
    li.className = `todo-item ${this.todo.completed ? 'completed' : ''}`;

    // Ajuste en la estructura HTML para que coincida con el diseño
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${this.todo.completed ? 'checked' : ''} />
      <span class="todo-text">${this.todo.text}</span>
      <button class="delete-btn">X</button>
    `;

    const checkbox = li.querySelector('.todo-checkbox') as HTMLInputElement;
    const deleteButton = li.querySelector('.delete-btn') as HTMLButtonElement;

    // Lógica para marcar como completada y eliminar
    checkbox.addEventListener('click', () => this.toggleCallback(this.todo.id));
    deleteButton.addEventListener('click', () => this.deleteCallback(this.todo.id));

    return li;
  }
}
