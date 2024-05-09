let form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  let data = new FormData(form);

  let request = new XMLHttpRequest();
  request.open(form.method, `https://ls-230-web-store-demo.herokuapp.com/${form.getAttribute('action')}`);

  request.addEventListener('load', () => {
    if (request.status === 201) {
      console.log(`This book was added to the catalog: ${request.responseText}`);
    }
  });

  request.send(data);
});