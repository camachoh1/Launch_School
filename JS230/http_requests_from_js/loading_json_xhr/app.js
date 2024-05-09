document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body');
  let request = new XMLHttpRequest();
  request.open('GET', "hts://api.github.com/repos/rails/rails");
  request.responseType = 'json'
  
  request.addEventListener('load', event => {
    let data;
    if (request.response) {
      data = request.response;
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');

      p1.textContent = request.status + ' ' + 'request status';
      p2.textContent = data.open_issues + ' ' + 'open issues';

      body.appendChild(p1);
      body.appendChild(p2);
    }
  });

  request.addEventListener('error', event => {
    console.log('error')
  })

  request.send()
});