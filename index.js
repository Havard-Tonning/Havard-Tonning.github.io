var map = L.map('map').setView([61.828, 6.805], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([61.83523221010576, 6.805439949245476], {icon: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]})}).addTo(map)
    .bindPopup("<H4>Du er her</H4><img src='./images/infotavler.jpg' class='popup-image'> <style='opacity:0'>");


L.marker([61.83573157084586, 6.805100560216835]).addTo(map)
.bindPopup("<H4>Noregs minste og kaldaste strand</H4><img src='./images/strand.jpg' class='popup-image'>");

L.marker([61.834191786195206, 6.805654369769167]).addTo(map)
    .bindPopup('<H4>Olden Gamle Kyrkje<H4><img src="./images/OldenGamleKyrkje.jpg" class="popup-image">');

L.marker([61.83198400514617, 6.801277627125196]).addTo(map)
    .bindPopup("<H4>Håskreda</H4><img src='./images/haskreda.jpg' class='popup-image'>")

L.marker([61.82756413293129, 6.808309705339039]).addTo(map)
    .bindPopup("<H4>Olden Nye Kyrkje</H4><img src='./images/OldenNyeKyrkje.jpg' class='popup-image'>");

L.marker([61.818087067146614, 6.810325979689476]).addTo(map)
    .bindPopup("<H4>Laukifossen</H4><img src='./images/laukifossen.jpg' class='popup-image'>");

L.marker([61.832533331352266, 6.81289993511424]).addTo(map)
.bindPopup("<H4>Singerheimen</H4><img src='./images/singerheimen.jpg' class='popup-image'>");


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



