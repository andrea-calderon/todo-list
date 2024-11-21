import TodoList from './components/TodoList';

// Renderiza el componente principal
const app = document.getElementById('app');
if (app) {
  const todoList = new TodoList();
  app.appendChild(todoList.render());
}
