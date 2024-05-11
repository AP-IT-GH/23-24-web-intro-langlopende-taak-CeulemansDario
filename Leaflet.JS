var map = L.map('bedrijfmap').setView([51.321620, 4.590467], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bedrijfMarker = L.marker([51.321620, 4.590467]).addTo(map);
bedrijfMarker.bindPopup("<b>check security<b>").openPopup();
