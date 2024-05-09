let DOMAIN = 'http://localhost:3000'
document.addEventListener('DOMContentLoaded', () => {
  let resources = ['/api/staff_members', '/api/students', '/api/schedules', '/api/bookings'];

  function makeGetRequest(route, callback) {
    let request = new XMLHttpRequest();
    let routeArr = route.split('/');
    let resource = routeArr[routeArr.length - 1];
    
    request.open('GET', route);
    request.responseType = 'json';

    request.addEventListener('load', () => {
      if (request.response) {
        callback(request.response, resource);
      }
      console.log([...request.response])
    });

    request.send();
  }

  function showResponse(response, resource) {
    let p = document.createElement('p');
    p.textContent = `${resource}: ${response.length}`;
    document.body.appendChild(p);
  }

  makeGetRequest(DOMAIN + '/api/staff_members', showResponse);
  makeGetRequest(DOMAIN + '/api/students', showResponse);
  makeGetRequest(DOMAIN + '/api/schedules', showResponse);
})