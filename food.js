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
    .bindPopup("<a href='sundekiosken.html'><H3>Sundekiosken</H3><p>Sundekiosken er ein fast-food restaurant med både tradisjonell gatemat som burger og løvsteik, samt asiatiske rettar som vårrullar og nudlar.</p><img src='./images/sunde2.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.8425222198133, 6.810743183913986], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='molla.html'><H3>Mølla Gjestehus</H3><p>Mølla er ein restaurant lokalisert rett ved fjorden, og serverer både sjømat og pizza.</p><img src='./images/molla3.jpg' class='popup-image'> <style='opacity:0'></a>");


L.marker([61.848272904545304, 6.814688885941699], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='fjordhotel.html'><H3>Olden Fjordhotel</H3><p>Olden Fjordhotel har middagsbuffet open for alle, kvar dag frå 19:00-22:00. </p><img src='./images/fjordhotel1.jpg' class='popup-image'> <style='opacity:0'></a>");

    
L.marker([61.83452678782124, 6.804963791435792], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='yris.html'><H3>Yris Kafé</H3><p>Yris Kafé, lokalisert i sentrum av Olden, tilbyr både iskrem, kaffi og matservering.</p><img src='./images/yris1.jpg' class='popup-image'> <style='opacity:0'></a>");
