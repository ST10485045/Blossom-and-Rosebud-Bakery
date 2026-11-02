// Initialize map centered on Johannesburg
const map = L.map('map').setView([-26.2041, 28.0473], 11);

// Add OpenStreetMap tiles (Free, no API key needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([-26.2041, 28.0473]).addTo(map)
    .bindPopup('<b>Blossom and Rosebud Bakery</b><br>Johannesburg, Gauteng.<br>Exact location TBC.')
    .openPopup();
