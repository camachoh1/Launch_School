document.addEventListener('DOMContentLoaded', () => {
  let DOMAIN = 'http://localhost:3000/'
  
  const formDataToJson = function(formData) {
    let json = {};

    for (const [key, value] of formData.entries()) {
      json[key] = value;
    }

    return JSON.stringify(json);
  }

  const addStaff = function(route) {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let request = new XMLHttpRequest();
      request.open('POST', route);
      request.setRequestHeader('Content-Type', 'application/json');

      let jsonData = formDataToJson(new FormData(form));

      request.addEventListener('load', (event) => {
        if (request.status === 201) {
          let response = JSON.parse(request.response)
          alert(`Successfully created staff with ID: ${response.id}`)
        } else {
          alert(request.responseText)
        }
      });

      request.send(jsonData);
    });
  }

  addStaff(DOMAIN + 'api/staff_members');
});