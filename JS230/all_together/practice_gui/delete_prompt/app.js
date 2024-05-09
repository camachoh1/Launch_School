document.addEventListener('DOMContentLoaded', () => {
  const TODO_ITEMS = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  const todosDiv = document.querySelector('#todos');
  const overlayContent = document.querySelector('.overlay-content');
  const overlay = document.querySelector('.overlay');
  const contextMenu = document.querySelector('.context-menu');

  (function(todoList) {
    todoList.forEach(todo => {
      const li = document.createElement('li');
      const span = document.createElement('span');

      li.textContent = todo.title;
      li.id = todo.id

      
      span.classList.add('remove');
      li.appendChild(span);
      todosDiv.appendChild(li);
    })
  })(TODO_ITEMS);

  const toggleOverlay = function(element, target) {
    if (target.tagName === 'SPAN') {
      element.style.display = 'flex';
      targetTodo = target.parentNode;
    } else {
      element.style.display = 'none';
    }
  }

  let targetTodo;

  todos.addEventListener('click', event => {
    console.log(event.button)
    const target = event.target;
    toggleOverlay(overlay, target);
    contextMenu.style.display = 'none';
  });

  todos.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    targetTodo = event.target.closest('li');
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = 'flex'
  });

  overlayContent.addEventListener('click', event => {
    const target = event.target;

    if (target.tagName === 'BUTTON' && targetTodo) {
      if (target.textContent === 'Yes') {
        targetTodo.remove();
        overlay.style.display = 'none';
      } else {
        overlay.style.display = 'none';
      }
    }
  });

  contextMenu.addEventListener('click', event => {
    const target = event.target;
    if (target.textContent === 'Remove' && targetTodo) {
      overlay.style.display = 'flex'
    }
    contextMenu.style.display = 'none';
  });
}); 