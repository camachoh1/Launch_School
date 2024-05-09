document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('main');
  let subArea = document.querySelector('#sub');

  main.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert(event.target.tagName);
  });

  subArea.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert(event.target.id);
  });
})