// building a simple todo app using MVC

// MVC stands for:

// Model - Manages the data of an application
// View - A visual representation of the model
// Controller - Links the user and the system

// The model is the data. In this todo application it'll be the actual todos and methods that will add, edit, or delete them.

// The view is how the data is displayed. In this case will be the rendered HTML in the DOM and CSS.

// The controller connects the model and the view. It takes user input, such as clicking, typing and handles callbacks for using interation (event listeners and event handlers).

// The model never touches the view. The view never touches the model. The controller connects them. 

// The app is an instance of the controller


// Model stores and manipulate data. Does not manipulate the DOM or handle events.
class Model {
  constructor() {
    this.todos =  [];
  };

  generateId() {
    let id;

    if (this.todos.length > 0) {
      const lastTodoId = this.todos[this.todos.length - 1].id;
      id = lastTodoId + 1;
    } else {
      id = 1;
    }

    return id;
  }

  addTodo(todoText) {
    const newTodo = {
      id: this.generateId(),
      text: todoText,
      complete: false,
    }
    console.log(newTodo)
    this.todos.push(newTodo);
    console.log('Added!');
    return true;
  }

  editTodo(id, updatedText) {
    const toEdit = this.todos.find(todo => todo.id === id);
    
    if (toEdit) {
      toEdit.text = updatedText;
      console.log('Edited!');
      return true;
    } else {
      console.log('Na Compa!')
    }
    
  }

  deleteTodo(id) {
    const toDeleteIdx = this.todos.findIndex(todo => todo.id === id);
    
    if (toDeleteIdx >= 0) {
      this.todos.splice(toDeleteIdx, 1);
      console.log('Deleted!')
      return true;
    } {
      console.log('Na Compa!')
    }
  }

  toggleTodo(id) {
    const toComplete = this.todos.find(todo => todo.id === id);

    toComplete.complete = !toComplete.complete;
    return true;
  }

  showTodos() {
    console.log(this.todos);
  }
}

class View {
  constructor() {
    this.app = document.querySelector('#root');
    
    this.form = document.createElement('form');
    this.form.classList.add('form');
    
    this.todoList = document.createElement('ul');
    this.todoList.classList = 'todo-list';
    this.renderForm()
  };

  renderForm() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add Todo';
    input.name = 'todo';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    this.form.append(input, submitButton);
    this.todoList.append(this.form);
    this.app.append(this.form, this.todoList);
  }

  createTodos(todos) {
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.text;
      li.id = todo.id;

      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox'
      checkBox.checked = todo.complete;

      const span = document.createElement('span');
      span.contentEditable = true;
      span.classList.add('editable');

      if (todo.complete) {
        const strike = document.createElement('s');
        strike.textContent = todo.text;
        span.append(strike);
      } else {
        span.textContent = todo.text;
      }

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Delete';

      const editButton = document.createElement('button');
      editButton.classList.add('edit');
      editButton.textContent = 'Edit';
      li.append(checkBox, span, editButton,deleteButton);

      this.todoList.append(li);
    });
  }

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild)
    }

    if (todos.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'Cule vago HP! Busca oficio, agrega algo!';
      this.todoList.append(p);
    } else {
      this.createTodos(todos);
    }
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos);
    this.application();
  };

  application() {
    this.submitTodo();
    this.completeTodo();
    this.deleteTodo();
    this.editTodo();
  }

  onTodoListChanged(todos) {
    this.view.displayTodos(todos);
  }

  submitTodo() {
    const form = this.view.form;
    form.addEventListener('submit', event => {
      event.preventDefault();

      const input = form.querySelector('input');
      this.handleAddTodo(input.value)
      this.onTodoListChanged(this.model.todos)
    });
  }

  deleteTodo() {
    const todoList = this.view.todoList;

    todoList.addEventListener('click', event => {
      if (event.target.classList.contains('delete')) {
        const id = parseInt(event.target.parentElement.id);

        this.handleDeleteTodo(id)
        this.onTodoListChanged(this.model.todos);
      }
    })
  }

  completeTodo() {
    const todoList = this.view.todoList;
    
    todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id)
        this.handleToggleTodo(id);
        this.onTodoListChanged(this.model.todos)
      }
    })
  }

  editTodo() {
    const todoList = this.view.todoList;
    todoList.addEventListener('click', event => {
      if (event.target.classList.contains('edit')) {
        const span = event.target.parentElement.querySelector('span');
        const newTodoText = span.textContent;
        const id = parseInt(event.target.parentElement.id);
        this.handleEditTodo(id, newTodoText);
        this.onTodoListChanged(this.model.todos);
      }
    });
  }

  handleAddTodo(todoText) {
    this.model.addTodo(todoText);
  }

  handleEditTodo(id, todoText) {
    this.model.editTodo(id, todoText);
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
  }

  handleToggleTodo(id) {
    this.model.toggleTodo(id);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Controller(new Model(), new View());
});


