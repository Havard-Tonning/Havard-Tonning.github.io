var map = L.map('mat_map', {zoomControl: false}).setView([61.845, 6.81], 14,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([61.841857038014155, 6.811442067471242], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='sundekiosken.html'><H3>Sundekiosken</H3><p>Sundekiosken is a fast-food restaurant with both traditional streetfoord like burger and hot dogs, as well as asian dishes like wok and spring rolls.</p><img src='../images/sunde2.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.8425222198133, 6.810743183913986], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='molla.html'><H3>Mølla Gjestehus</H3><p>Mølla is a restaurant located right by the fjord that serves both seafood and pizza.</p><img src='../images/molla3.jpg' class='popup-image'> <style='opacity:0'></a>");


L.marker([61.848272904545304, 6.814688885941699], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='fjordhotel.html'><H3>Olden Fjordhotel</H3><p>Olden Fjordhotel has a dinner buffet open for everyone from 19:00-22:00 every day.</p><img src='../images/fjordhotel1.jpg' class='popup-image'> <style='opacity:0'></a>");

    
L.marker([61.83452678782124, 6.804963791435792], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='yris.html'><H3>Yris Kafé</H3><p>Yris Café is located in the heart of Olden and serves pastries, coffee and dinner.</p><img src='../images/yris1.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.83514958988893, 6.804779749846841], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='stabukk.html'><H3>Stabukk</H3><p>Stabukk is a café in the centre of Olden serving ice cream, shakes, soft serves and pastries.</p><img src='../images/stabukk5.jpg' class='popup-image'> <style='opacity:0'></a>");
