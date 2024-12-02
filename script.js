document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const patientName = document.getElementById('patientName').value.trim();
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;

    if (!patientName || !bookingDate || !bookingTime) {
        alert('Please fill out all fields.');
        return;
    }

    const booking = { patientName, bookingDate, bookingTime };

    // Save booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    document.getElementById('confirmationMessage').innerText = 
        `Thank you, ${patientName}! Your appointment is booked for ${bookingDate} at ${bookingTime}.`;

    this.reset();
});
