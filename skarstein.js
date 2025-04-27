var map = L.map('skarstein_map', {zoomControl: false}).setView([61.845, 6.812], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var latlngs = [
    [61.83522928170395, 6.805438844524453],
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);