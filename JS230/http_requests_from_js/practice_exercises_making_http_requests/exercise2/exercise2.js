document.addEventListener('DOMContentLoaded', () => {
  let DOMAIN = 'http://localhost:3000'

  function getSchedules(route, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', route);
    request.timeout = 5000;
    request.responseType = 'json';

    request.addEventListener('load', (event) => {
      if (request.response) {
        callback(request.response);
      }
    });

    request.addEventListener('timeout', (event) => {
      insertResults('The request took too long. try again later!');
    })

    request.addEventListener('loadend', () => {
      insertResults('The request has completed!');
    });

    request.send();
  }

  function tallySchedules(schedules) {
    return [...schedules].reduce((acc,id) => {
      if (!acc[id.staff_id]) {
        acc[id.staff_id] = 0
      }
      acc[id.staff_id] += 1

      return acc
    }, {});
  }

  function insertResults(str) {
    let p = document.createElement('p');
    p.textContent = str;
    document.body.appendChild(p);
  }

  function displaySchedules(response) {
    let tally = tallySchedules(response);
    for (id in tally) {
      insertResults(`Staff Id ${id}: ${tally[id]}`);
    }    
  }

  getSchedules(DOMAIN + '/api/schedules', displaySchedules);
});