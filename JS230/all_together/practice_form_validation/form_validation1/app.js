document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  const createError = function(element, message) {
    const error = document.createElement('span');
      error.classList.add('error');
      error.textContent = message;
      element.parentNode.appendChild(error)
  }

  const validationError = function(element) {
    switch(element.name) {
      case "email":
        createError(element, 'Please Enter a Valid Email');
        break;
      case "phone-number":
        createError(element, 'Please Enter a Valid Phone');
        break;
      case "password":
        createError(element, 'The Password Must be at Least 10 Characters Long');
        break;
    }
  }

  form.addEventListener('focusin', (event) => {
    const target = event.target;
    const currentError = target.parentNode.querySelector('.error');

    if (currentError) {
      currentError.style.display = 'none';
    }
  });

  form.addEventListener('focusout', (event) => {
    const target = event.target;
    const existingError = target.parentNode.querySelector('.error');

    if (!existingError) {
      if (target.value === '') {
        let message = `${target.name} is required`;
        createError(target, message);
      } else if (!target.checkValidity()) {
        validationError(target);
      }
    }
  }); 
});