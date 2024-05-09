document.addEventListener('DOMContentLoaded', () => {
  const createNewForm = function() {
    let createFormButton = document.querySelector('#create-form');

    createFormButton.addEventListener('click', event => {
      event.preventDefault();
      let forms = [...document.querySelectorAll('form')];
  
      let lastForm = forms[forms.length - 1];
      let newForm = lastForm.cloneNode(true);
  
      let newFormID = Number(lastForm.id.match(/\d+/)[0]) + 1;
      newForm.id = 'form'+ String(newFormID);
  
      let newFormP = newForm.querySelector('p');
      newFormP.textContent = `Schedule ${newFormID}`;
  
      document.body.insertBefore(newForm, document.body.lastElementChild);
    });
  }

  const getStaffMembers = function(callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/staff_members');
    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', () => {
      if (request.status === 200) {
        callback(JSON.parse(request.response))
      }
    });

    request.send();
  }

  const insertStaffNames = function(staff) {
    let select = document.querySelector('select');
    staff.forEach(staffMemmber => {
      let option = document.createElement('option');
      option.textContent = staffMemmber.name;
      option.value = staffMemmber.id;
      select.appendChild(option);
    });
  }

  const submitForms = function(form) {
    let formData = new FormData(form);
    
    let json = {};

    for (const [key, value] of formData.entries()) {
      if (key === 'staff_id') {
        json[key] = parseInt(value, 10);
      } else {
        json[key] = value;
      }
    }
    let data = JSON.stringify({schedules: [json]});

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', () => {
      if (request.status === 201) {
        alert(request.statusText)
      } else {
        alert(request.statusText);
        return;
      }
    });

    request.send(data);
  }

  const submitFormButton = function(callback) {
    let button = document.querySelector('#submit-btn');
    
    button.addEventListener('click', event => {
      event.preventDefault();
      let forms = [...document.querySelectorAll('form')];
      forms.forEach(callback);
    });
  }
  
  getStaffMembers(insertStaffNames);
  createNewForm();
  submitFormButton(submitForms);
});

