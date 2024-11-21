import TodoList from './components/TodoList';


const app = document.getElementById('app');
if (app) {
  const todoList = new TodoList();
  app.appendChild(todoList.render());
}
