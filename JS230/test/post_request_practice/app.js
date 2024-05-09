document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const DOMAIN = 'https://api.restful-api.dev/';

  const makeUrl = function(path) {return DOMAIN + path};
  const makeRequest = async function(path, method, body) {
    const url = makeUrl(path);
    const options = {
      method,
      headers: {
        'Content-Type' : 'application/json',
      }
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Error!')
      }

      return await response.json();
    } catch(error) {
      throw error
    }
  }

  const formatData = function(formData) {
    const result = {};
    const data = {}
    for (let [key, value] of formData.entries()) {
      if (key === 'name') {
        result[key] = value;
      } else {
        data[key] = value;
      }
    }

    result.data = data;

    return result;
  }

  const displayResponse = function(response) {
    const responseDiv = document.createElement('div');
    const responseH1 = document.createElement('h1');
    responseH1.textContent = 'New Object Added'
    responseDiv.appendChild(responseH1);

    const responseName = `Name: ${response.name}`;
    const responseId = `ID: ${response.id}`;
    const responseCreatedAt = `Created At: ${response.createdAt}`;

    [responseName, responseId, responseCreatedAt].forEach(data => {
      const newP = document.createElement('p');
      newP.textContent = data;
      responseDiv.appendChild(newP);
    })

    document.body.appendChild(responseDiv);
  }


  form.addEventListener('submit', async event => {
    event.preventDefault()
    let data = new FormData(form);
    data = formatData(data);

    try {
      const response = await makeRequest('objects', 'POST', data);
      displayResponse(response);
    } catch(error) {
      console.error(error)
    }
  })
});