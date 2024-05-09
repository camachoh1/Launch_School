document.addEventListener('DOMContentLoaded', () => {
  const URL = 'http://localhost:3000/api';
  const DEFAULT_HEADERS = {
    'Content-Type' : 'application/json',
  };

  const buildUrl = (path) => {
    return URL + path
  };

  const fetchRequest = async (path, method, body = null, headers = DEFAULT_HEADERS) => {
    const url = buildUrl(path);
    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (!(response.ok)) {
        const errorText = await response.text();
        throw new Error(`status: ${response.status} - ${errorText} `);
      }

      if (response.status === 204 || response.status === 201) {
        return true;
      }

      return await response.json();
    } catch(error) {
      throw error;
    }
  }
  
  const getAvailableStaff = async function() {
    try {
      const data = await fetchRequest('/schedules', 'GET');
      
      return data.filter(staff => staff.student_email === null);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const getStaffInfo = async function() {
    try {
      const data = await fetchRequest('/staff_members', 'GET');
      return data
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function processStaffData() {
    try {
      const [availableStaff, staffInfo] = await Promise.all([getAvailableStaff(), getStaffInfo()])
      
      insertStaffData(formatStaffData(availableStaff, staffInfo));
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const formatStaffData = function(availableStaff, staffInfo) {
    return availableStaff.map(staff => {
      const staffDetails = staffInfo.find(info => info.id === staff.staff_id);

      const staffName = staffDetails ? staffDetails.name : "unknown";
      const id = staffDetails ? staffDetails.id : "unknown";

      return {
        name: staffName, 
        id: id, 
        date: staff.date, 
        time: staff.time
      }
    });
  }

  const insertStaffData = function(staffInfo) {
    const select = document.querySelector('select');
    staffInfo.forEach(staff => {
      const option = document.createElement('option');

      option.textContent = `${staff.name} | ${staff.date} | ${staff.time}`;
      option.value = staff.id;
      select.appendChild(option);
    });
  }

  const bookSchedule = function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const bookingResponse = await fetchRequest('/bookings', 'POST', data);
        
        if (bookingResponse) {
          alert('Booked!');
        }
      } catch (error) {
        alert(error);

        if (error.message.includes('404')) {
          const bookingSequence = error.message.match(/booking_sequence: (\d+)/);

          if (bookingSequence) {
            const sequenceNumber = bookingSequence[1];
            createNewStudentForm(data.student_email, sequenceNumber);
            createNewStudent();
          } else {
            console.error('Error:', error);
          }
        }
      }
    });
  }

  const createNewStudentForm = function(email, bookingSequence) {
    const newForm = document.createElement('form');
    newForm.id = 'create-new-student';
    newForm.method = 'post';
    newForm.action = '/api/students';

    const fieldSet = document.createElement('fieldset');
    const h2 = document.createElement('h2');
    h2.textContent = 'Please Provide New Student Details';

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email:';

    const emailInput = document.createElement('input');
    emailInput.value = email;
    emailInput.name = 'email';
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Please enter your email';

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name:';

    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameInput.type = 'name';
    nameInput.id = 'name';
    nameInput.placeholder = 'Please enter your name';

    const bookingSequenceLabel = document.createElement('label');
    bookingSequenceLabel.for = 'booking-sequece';
    bookingSequenceLabel.textContent = 'Booking Sequence:';

    const bookingSequenceInput = document.createElement('input');
    bookingSequenceInput.value = bookingSequence;
    bookingSequenceInput.type = 'text';
    bookingSequenceInput.name = 'booking_sequence';
    bookingSequenceInput.id = 'booking-sequence';
    
    
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';

    let elements = [h2, emailLabel, emailInput, nameLabel, nameInput, bookingSequenceLabel, bookingSequenceInput, submitInput];

    elements.forEach(element => fieldSet.appendChild(element));
    newForm.appendChild(fieldSet)
    document.body.appendChild(newForm);
  }

  const createNewStudent = function() {
    const form = document.querySelector('#create-new-student');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetchRequest('/students', 'POST', data);
        
        if (response) {
          alert('Successfully added student to the database.');
          resubmitForm();
        }
      } catch(error) {
        console.error('Error:', error);
        alert(error);
      }
    });

    const resubmitForm = async function() {
      const originalForm = document.querySelector('#book-schedule');
      const formData = new FormData(originalForm);
      const originalData = Object.fromEntries(formData.entries());
      
      try {
        const response = await fetchRequest('/bookings', 'POST', originalData);
        if (response) {
          alert('The form was successfully resubmitted - Booked!');
        }
      } catch(error) {
        console.error('Error:', error);
        alert(error);
      }
    }
  }

  processStaffData();
  bookSchedule();
});