document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('textarea').addEventListener('keyup', event => {
    let maxCharCount = 140;
    let counter = document.querySelector('.counter');
    let button = document.querySelector('button');
    let textArea = document.querySelector('textarea');
    let length = textArea.textLength;

    counter.textContent = `${maxCharCount -= length} characters remaining`

    if (maxCharCount < 0) {
      textArea.classList.add('invalid');
      button.disabled = true;
    } else {
      textArea.classList.remove('invalid');
      button.disabled = false;
    }
  });
});