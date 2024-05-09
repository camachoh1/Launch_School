document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');

  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  let data = {name: "El Libro", sku: "abc123", price: 800};
  let json = JSON.stringify(data);

  request.send(json);

  request.addEventListener('load', event => {
    document.querySelector('p').textContent = request.responseText
  });
})