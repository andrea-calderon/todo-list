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
      li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${this.todo.completed ? 'checked' : ''} />
        <span>${this.todo.text}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      const checkbox = li.querySelector('.todo-checkbox') as HTMLInputElement;
      const deleteButton = li.querySelector('.delete-btn') as HTMLButtonElement;
  
      checkbox.addEventListener('click', () => this.toggleCallback(this.todo.id));
      deleteButton.addEventListener('click', () => this.deleteCallback(this.todo.id));
  
      return li;
    }
  }
  