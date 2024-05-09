document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let cursorInterval;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');

    if (!cursorInterval) {
      cursorInterval = setInterval(() => {
        textField.classList.toggle('cursor')
      }, 500);
    }
  });

  document.addEventListener('keyup', event => {
    event.preventDefault()
    
    if (textField.classList.contains('focused')) {
      let content = document.querySelector('.content');
      if (event.key !== 'Backspace') {
        content.textContent += event.key
      } else {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      }
      
    };
  });

  document.addEventListener('click', event => {
    clearInterval(cursorInterval);
    
    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });
});