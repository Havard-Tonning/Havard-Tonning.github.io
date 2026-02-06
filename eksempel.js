var map = L.map('eksempel_map', {zoomControl: false}).setView([61.845, 6.81], 13.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([61.84159799952605, 6.804931133868038]).addTo(map);