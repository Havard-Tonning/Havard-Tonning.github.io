var map = L.map('map', {zoomControl: false}).setView([61.82913342266096, 6.806796286220201], 14);

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
    .bindPopup("<a href='nykyrkje.html'><H3>Olden Nye Kyrkje</H3><p>Ei langkyrkje frå 1934. Legg merke til vaierane som bind kyrkja til bakken for å forhindre at den bles vekk.</p><img src='./images/OldenNyeKyrkje.jpg' class='popup-image'></a>");

L.marker([61.818087067146614, 6.810325979689476]).addTo(map)
    .bindPopup("<a href='lauki.html'><H3>Laukifossen</H3><p>Eit vakkert fossefall som også blir nytta til kraftgenerering.</p><img src='./images/laukifossen.jpg' class='popup-image'></a>");

L.marker([61.832533331352266, 6.81289993511424]).addTo(map)
.bindPopup("<a href='singerheimen.html'><H3>Singerheimen</H3><p>Ei samling vakre bygg oppført av milliardæren Willam Singer i 1921. I dag verna gjennom bruk.</p><img src='./images/singerheimen.jpg' class='popup-image'></a>");


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
    [61.83471511953078, 6.812346530947388],
    [61.83464690710933, 6.811431284703945],
    [61.83453606160096, 6.808709631401072],
    [61.83449911300429, 6.807999111201545],
    [61.834530377200245, 6.807583637577877],
    [61.83500217847248, 6.807559552148295],
    [61.83532049812849, 6.807457189070023],
    [61.835402919644594, 6.807324719206721],
    [61.836249858935126, 6.809016720490677],
    [61.83673015976307, 6.809486386345485],
    [61.838372788558985, 6.810558187908968],
    [61.838475094707015, 6.809685091163577],
    [61.83870812411156, 6.807637829792724],
    [61.8388985248653, 6.8072404202396495],
    [61.83849214570638, 6.806794839831658],
    [61.83833868644171, 6.806782797117928],
    [61.83827332392916, 6.807138057172949],
    [61.83705698739051, 6.806469686532155],
    [61.836758579691434, 6.806541942809336],
    [61.83622143854922, 6.807035694072247],
    [61.83600260057039, 6.807324719151463],
    [61.835792287264034, 6.807679979229857],
    [61.83548249884142, 6.807222356108134],
    [61.83534039301372, 6.806788818413872],
    [61.83520965507084, 6.806036148805777],
    [61.835255129201116, 6.805626696538973],
    [61.835230448567664, 6.805423001262164]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

var latlngs2 = [
    [61.843105042128514, 6.811016007011299],
    [61.843039941157656, 6.811416086626735],
    [61.84281811824503, 6.81125547993921],
    [61.84259593175304, 6.811113132932271],
    [61.842277289403626, 6.810932461736519],
    [61.84185443727406, 6.810917862042929], 
    [61.8415805706659, 6.811156932016824],
    [61.841446220118264, 6.811363152674601],
    [61.841300673023, 6.811560248535604],    
    [61.84112842704919, 6.8116606214244175],
    [61.84089761592857, 6.811757344394814],
    [61.84064699442269, 6.811806618360511],    
    [61.840466132270414, 6.811784718819411],
    [61.84003550380865, 6.811602222661659],
    [61.83973406028508, 6.811421551469055],
    [61.83946017474255, 6.811290154232342],
    [61.83940160770326, 6.811279204461255],
    [61.839192315762574, 6.811310228809573],
    [61.83909757408329, 6.811324828502589], 
    [61.838991635313405, 6.811323003538368],
    [61.83878750836257, 6.811301103995624],
    [61.83855495701501, 6.811224455606968],    
    [61.83832584914906, 6.811114957908136],
    [61.838118272499045, 6.8109123871676385],
    [61.838194068283535, 6.810441547073438],  
];

var polyline2 = L.polyline(latlngs2, {color: '#3a7ec9'}).addTo(map);

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
            //timeout: 10000
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

        map.setView(e.latlng);
    }else {
        locationMarker.setLatLng(e.latlng);
        locationCircle.setLatLng(e.latlng);
        locationCircle.setRadius(radius);
    }

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



