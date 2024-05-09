let form = document.getElementById('form');
// Bind to the form's submit event to handle the submit button
// being clicked, enter being pressed within an input, etc.

form.addEventListener('submit', event => {
  // prevent the browser from submitting the form
  event.preventDefault();

  // access the inputs using form.elements and serialize into a string

  let keysAndValues = [];

  for (let index = 0; index < form.elements.length; index += 1) {
    let element = form.elements[index];
    let key;
    let value;

    if (element.type !== 'submit') {
      key = encodeURIComponent(element.name);
      value = encodeURIComponent(element.value);
      keysAndValues.push(`${key}=${value}`);
    }
  }

  let data = keysAndValues.join('&');

  // submit the data
  let request = new XMLHttpRequest();
  request.open(form.method, `https://ls-230-web-store-demo.herokuapp.com/${form.getAttribute('action')}`);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.addEventListener('load', () => {
    if (request.status === 201) {
      console.log(`this book was added to the catalog: ${request.responseText}`);
    }
  });
  request.send(data);
});