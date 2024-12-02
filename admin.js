document.addEventListener('DOMContentLoaded', function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const tableBody = document.getElementById('bookingTable').querySelector('tbody');

    // Populate the table with bookings
    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.patientName}</td>
            <td>${booking.bookingDate}</td>
            <td>${booking.bookingTime}</td>
        `;
        tableBody.appendChild(row);
    });

    // Clear all bookings
    document.getElementById('clearBookings').addEventListener('click', () => {
        localStorage.removeItem('bookings');
        tableBody.innerHTML = '';
        alert('All bookings cleared!');
    });
});
