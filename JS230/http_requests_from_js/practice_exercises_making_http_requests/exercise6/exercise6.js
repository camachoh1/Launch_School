class BookingManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.bookings = [];
  }

  buildUrl(path) {
    return this.apiUrl + path;
  }

  async fetchRequest(path, method, headers = {'Content-Type': 'application/json'}) {
    const url = this.buildUrl(path);
    const options = { method, headers };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`status: ${response.status} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getBookingDates() {
    try {
      let response = await this.fetchRequest('/bookings', 'GET');
      return response;
    } catch (error) {
      alert(error);
    }
  }

  showBookingDates() {
    const ul = document.querySelector('#booking-list');
    this.bookings.forEach(booking => {
      const li = document.createElement('li');
      li.textContent = booking;
      ul.appendChild(li);
    });
  }

  showDetails() {
    const ul = document.querySelector('#booking-list');
    
    ul.addEventListener('click', async (event) => {
      const target = event.target;
      let data;

      try {
        let response = await this.fetchRequest(`/bookings/${target.textContent}`, 'GET');

        if (response) {
          data = response.map(booking => booking.join(' | '))[0];

          let newUl = document.createElement('ul');
          let newLi = document.createElement('li');
          newLi.textContent = data;

          target.appendChild(newUl);
          newUl.appendChild(newLi);
        }
      } catch (error) {
        alert(error);
      }
    });
  }

  async displayData() {
    try {
      this.bookings = await this.getBookingDates();

      this.showBookingDates(this.bookings);
      this.showDetails();
    } catch (error) {
      alert(error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bookingManager = new BookingManager('http://localhost:3000/api');
  bookingManager.displayData();
});
