document.addEventListener('DOMContentLoaded', () => {
  
  const getSchedules = async() => {
    try {
      const response = await fetch('http://localhost:3000/api/schedules', {'Content-Type' : 'application/json'});
      console.log(response)
      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(`Error: ${response.status} - ${responseText}`); 
      }

      console.log(await response.json());
    } catch(error) {
      alert(error);
    }
  }
  
  const cancelSchedule = async(scheduleId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/schedules/${scheduleId}`, {
      method: 'DELETE',
      headers: {'Content-Type' : 'application/json'}
    });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      if (response.status === 204) {
        alert('Schedule Deleted!');
      }
    } catch(error) {
      if (error.message.includes('403')) {
        alert(error);
      } else if (error.message.includes('404')) {
        alert(error);
      }
    }
  }


  const cancelBooking = async(bookingId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'}
    });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      if (response.status === 204) {
        alert('Booking Canceled!');
      }
    } catch(error) {
      if (error.message.includes('404')) {
        alert(error);
      }
    }
  }
});