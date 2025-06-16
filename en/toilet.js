var map = L.map('toilet_map', {zoomControl: false}).setView([61.837268553540305, 6.807555672099274], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([61.83545797623981, 6.805650130396526]).addTo(map)
    .bindPopup("<H3>Toilet</H3><img src='../images/toilet1.jpg' class='toiletimg'>");

L.marker([61.836826234006985, 6.806368962568347]).addTo(map)
    .bindPopup("<H3>Toilet</H3><img src='../images/toilet2.jpg' class='toiletimg'>");

L.marker([61.838870667881864, 6.809051973013834]).addTo(map)
    .bindPopup("<H3>Toilet</H3><img src='../images/toilet3.jpg' class='toiletimg'>");

L.marker([61.85984345786699, 6.814774301942007]).addTo(map)
    .bindPopup("<H3>Toilet</H3><img src='../images/toilet4.jpg' class='toiletimg'>");


