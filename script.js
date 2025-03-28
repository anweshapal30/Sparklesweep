// JavaScript for interactivity

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get booking details
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Send booking details to the backend API
    fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, date, time }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Booking submitted! We will contact you shortly.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your booking.');
    });
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ name, date, time });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Booking submitted! We will contact you shortly.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
    
    // Optionally, you can also store contact messages in local storage or send them to a server
});
