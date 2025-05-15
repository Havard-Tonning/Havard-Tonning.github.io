var map = L.map('map', {zoomControl: false}).setView([61.836, 6.805], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([61.83523221010576, 6.805439949245476], {icon: L.icon({
//     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]})}).addTo(map)
//     .bindPopup("<H3>Du er her</H3><p>Klikk på kartmarkørane for å vise sjåverdigheita. Klikk igjen for å opne infosida til staden.</p><img src='./images/infotavler.jpg' class='popup-image'> <style='opacity:0'>")
//     .openPopup();

L.marker([61.83573157084586, 6.805100560216835]).addTo(map)
.bindPopup("<a href='strand.html'><H3>Noregs minste og kaldaste strand</H3><p>2,5 meter brei og ein gjennomsnittstemperatur på rundt 6 grader.</p><img src='./images/strand.jpg' class='popup-image'></a>");

L.marker([61.834191786195206, 6.805654369769167]).addTo(map)
    .bindPopup('<a href="gamlekyrkja.html"><H3>Olden Gamle Kyrkje</H3><p>Ei korskyrkje frå 1759, bygd på same stad som ei stavkyrkje frå 1300-talet.</p><img src="./images/OldenGamleKyrkje.jpg" class="popup-image"></a>');

L.marker([61.83198400514617, 6.801277627125196]).addTo(map)
    .bindPopup("<a href='skred.html'><H3>Håskreda</H3><p>Kvart år dundrar eit stort skred ned fjellsidene. Somme år blir bygda dekka av ei sky av snø.</p><img src='./images/haskreda.jpg' class='popup-image'></a>")

L.marker([61.82756413293129, 6.808309705339039]).addTo(map)
    .bindPopup("<a href='nykyrkje.html'><H3>Olden Nye Kyrkje</H3><p>Ei langkyrkje frå 1934. Legg merke til vaierane som bind kyrkja til bakken for å forhindre at den bles vekk <i>igjen.</i></p><img src='./images/OldenNyeKyrkje.jpg' class='popup-image'></a>");

L.marker([61.818087067146614, 6.810325979689476]).addTo(map)
    .bindPopup("<a href='lauki.html'><H3>Laukifossen</H3><p>Eit vakkert fossefall som også blir nytta til kraftgenerering.</p><img src='./images/laukifossen.jpg' class='popup-image'></a>");

L.marker([61.832533331352266, 6.81289993511424]).addTo(map)
.bindPopup("<a href='singerheimen.html'><H3>Singerheimen</H3><p>Ei samling vakre bygg oppført av milliareæren Willam Singer i 1921. I dag verna gjennom bruk.</p><img src='./images/singerheimen.jpg' class='popup-image'></a>");


// create a red polyline from an array of LatLng points
var latlngs = [
    [61.835230448567664, 6.805423001262164],
    [61.83566649705491, 6.805070359940292],
    [61.83485189099297, 6.805001167298601],
    [61.83470630403707, 6.80505030056035],
    [61.834617586970886, 6.804723773144332],
    [61.83436334353824, 6.8047054043916475],
    [61.834469705114294, 6.805388298766583],
    [61.83419032210607, 6.805614354392079],
    [61.83420410493653, 6.804687273912866],
    [61.83484155407922, 6.804366080675975],
    [61.83483121717671, 6.802146927328194],
    [61.83400080755126, 6.801672437276785],
    [61.83398357889805, 6.799562781698108],
    [61.83283743958685, 6.799613145634274],
    [61.83219305692846, 6.801306709977974],
    [61.82998195937655, 6.801690203881712],
    [61.82797941432101, 6.800633711739332],
    [61.8270785986043, 6.801185610642557],
    [61.82608841533449, 6.803424743242823],
    [61.823780345282046, 6.802730927493926],
    [61.822268837652565, 6.802920149967187],
    [61.82132317674153, 6.805222356801889],
    [61.81926310098855, 6.8062879356371155],
    [61.81760456998765, 6.80810889423224],
    [61.8177028558019, 6.809604681632905],
    [61.81805299645778, 6.8107102636247],
    [61.820853977984825, 6.809890832473656],
    [61.82227279873308, 6.810072928335206],
    [61.82394302998819, 6.809595555547623],
    [61.827523376810106, 6.808724096785848],
    [61.832073437828896, 6.806942158654597],
    [61.83231102323825, 6.811519463915973],
    [61.83204766360548, 6.812281211246334],
    [61.83249841236963, 6.814158757483138],
    [61.83305550846756, 6.81424458818213],
    [61.83472167178082, 6.812313397757036],
    [61.83450897512067, 6.807624896582845],
    [61.83528882632151, 6.807341810444835],
    [61.835230448567664, 6.805423001262164]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

 L.marker([61.85855378132025, 6.832809190327688], {icon: L.icon({
     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
     iconSize: [25, 41],
     iconAnchor: [12, 41],
     popupAnchor: [1, -34],
     shadowSize: [41, 41]})}).addTo(map)
     .bindPopup("<a href='huaren.html'><H3>Huaren</H3><p>Familievenleg tur med flott utsikt.</p><img src='./images/huaren.jpg' class='popup-image'> <style='opacity:0'></a>");

L.marker([61.84875878015604, 6.771772936299873], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='skarstein.html'><H3>Skarsteinsetra</H3><p>Familievenleg tur opp til ei flott seter med utsikt over fjorden.</p><img src='./images/skarstein.jpg' class='popup-image'> <style='opacity:0'></a>");

    
L.marker([61.811346777648616, 6.794098073865384], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<a href='laukisetra.html'><H3>Laukisetra</H3><p>Litt meir krevande tur, men med utsikt på toppen som gjer strevet verdt det.</p><img src='./images/laukisetra1.jpg' class='popup-image'> <style='opacity:0'></a>");

// Add a control button to request location permission
var locationControl = L.control({position: 'topleft'});

locationControl.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    div.innerHTML = '<a href="#" title="Show my location" role="button" aria-label="Show my location" style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background-color: white; text-decoration: none; color: black; font-size: 18px;"><i class="fa-solid fa-map-pin"></i></a>';
    
    div.onclick = function() {
        // Start location tracking when button is clicked
        map.locate({
            watch: true,
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 10000
        });
        return false;
    };
    
    return div;
};

locationControl.addTo(map);
    
var locationMarker, locationCircle;

function onLocationFound(e){
    var radius = e.accuracy;

    if(!locationMarker){
        locationMarker = L.circleMarker(e.latlng, {radius: 8, fillColor: '#3a7ec9', color: "FFF", weight: 2, opacity: 1, fillOpacity: 0.8}).addTo(map);

        locationCircle = L.circle(e.latlng, {radius: radius, color: '#3a7ec9', fillColor:'#3a7ec9', fillOpacity: 0.1 }).addTo(map);
    }else {
        locationMarker.setLatLng(e.latlng);
        locationCircle.setLatLng(e.latlng);
        locationCircle.setRadius(radius);
    }

    // // Center map on user's location
    // map.setView(e.latlng);
}

function onLocationError(e){
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// map.locate({
//     watch: true,
//     enableHighAccuracy: true,
//     maximumAge: 10000,
//     timeout: 10000
// });



