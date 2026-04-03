const mapElement = document.getElementById('map');
if (mapElement) {

    var map = L.map('map', {
        zoomControl: false
    }).setView([61.82913342266096, 6.806796286220201], 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    const sponsoredControl = L.control({
        position: 'bottomleft'
    });
    sponsoredControl.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-control');
        div.innerHTML = 'Black tags contain sponsored listings';
        div.style.cssText = 'background:white; padding: 3px 6px; font-size: 10px; opacity: 0.8; border-top-right-radius: 3px; margin: 0;';
        return div;
    };
    sponsoredControl.addTo(map);

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
        [61.83201052919079, 6.801328837703639],
        [61.83122889387333, 6.801261937434771],
        [61.83025774348332, 6.8017859894498285],
        [61.82958511602413, 6.801389480440193],
        [61.82833227144016, 6.800706722164028],
        [61.827943027743125, 6.800655193213832],
        [61.827572025262576, 6.800925720068428],
        [61.827346988785585, 6.800861308912572],
        [61.82708973192429, 6.801129566883371],
        [61.82706112923477, 6.80132506936512],
        [61.827030718490185, 6.80176306522494],
        [61.82679351364806, 6.802600410251068],
        [61.82628868698325, 6.803321815196654],
        [61.82571086313819, 6.803527930895393],
        [61.823960754227784, 6.802841696181773],
        [61.82343763237603, 6.8025067581713206],
        [61.823011828937446, 6.8025711693271775],
        [61.822354863472604, 6.802828813950601],
        [61.822330875973435, 6.802858073491995],
        [61.821365701899616, 6.804703535919273],
        [61.82136321001993, 6.804703433099487],
        [61.82141691443947, 6.805532186381874],
        [61.820730707891556, 6.806130335130116],
        [61.82047856302014, 6.806089782692309],
        [61.819509860618346, 6.80603909213269],
        [61.819166737936456, 6.8063263387409085],
        [61.81876615730578, 6.806339856227116],
        [61.818063931634796, 6.807340150257422],
        [61.81757873529533, 6.808117878059041],
        [61.817730355958446, 6.808786993655508],
        [61.81766172775245, 6.809672388977765],
        [61.81785803593793, 6.809831219523707],
        [61.81804157497166, 6.81073351170326],
        [61.81801915774592, 6.8106478078215735],
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

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);

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

    var polyline2 = L.polyline(latlngs2, {
        color: '#3a7ec9'
    }).addTo(map);

    function makeIcon(emoji) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 50'>
        <path d='M20 0 C9 0 0 9 0 20 C0 35 20 50 20 50 C20 50 40 35 40 20 C40 9 31 0 20 0Z' fill='#1a1a2e' opacity='0.85'/>
        <text x='20' y='27' text-anchor='middle' font-size='18'>${emoji}</text>
    </svg>`;
        return L.icon({
            iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -42],
        });
    }

    function makeWhiteIcon(emoji) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 50'>
        <path d='M20 0 C9 0 0 9 0 20 C0 35 20 50 20 50 C20 50 40 35 40 20 C40 9 31 0 20 0Z' fill='#ffffff' opacity='0.85'/>
        <text x='20' y='27' text-anchor='middle' font-size='18'>${emoji}</text>
    </svg>`;
        return L.icon({
            iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
            iconSize: [40, 50],
            iconAnchor: [20, 50],
            popupAnchor: [0, -52],
        });
    }

    const icons = {
        accommodation: makeIcon('🛏️'),
        camping: makeIcon('⛺'),
        adventure: makeIcon('🧭'),
        store: makeIcon('🛍️'),
        food: makeIcon('🍽️'),
        wellness: makeIcon('🧖'),
        hike: makeIcon('🥾'),
        main: makeWhiteIcon('⭕')
    };


    L.marker([61.83573157084586, 6.805100560216835], {
            icon: icons.main
        }).addTo(map)
        .bindPopup("<a href='strand.html'><H3>Norway's smallest and coldest beach</H3><p>2.5 meters wide and an average temperature of around 6 degrees.</p><img src='../images/strand.jpg' class='popup-image'></a>");

    L.marker([61.834191786195206, 6.805654369769167], {
            icon: icons.main
        }).addTo(map)
        .bindPopup('<a href="gamlekyrkja.html"><H3>Olden Gamle Kyrkje</H3><p>A cross church from 1759, built on the same site as a stave church from the 14th century.</p><img src="../images/OldenGamleKyrkje.jpg" class="popup-image"></a>');

    L.marker([61.83198400514617, 6.801277627125196], {
            icon: icons.main
        }).addTo(map)
        .bindPopup("<a href='skred.html'><H3>Håskreda</H3><p>Every year a large avalanche thunders down the mountainside. Some years the village is covered by a cloud of snow.</p><img src='../images/haskreda.jpg' class='popup-image'></a>")

    L.marker([61.82756413293129, 6.808309705339039], {
            icon: icons.main
        }).addTo(map)
        .bindPopup("<a href='nykyrkje.html'><H3>Olden Nye Kyrkje</H3><p>A long church from 1934. Note the wires that tie the church to the ground to prevent it from blowing away.</p><img src='../images/OldenNyeKyrkje.jpg' class='popup-image'></a>");

    L.marker([61.818087067146614, 6.810325979689476], {
            icon: icons.main
        }).addTo(map)
        .bindPopup("<a href='lauki.html'><H3>Laukifossen</H3><p>A beautiful waterfall that is also used for power generation.</p><img src='../images/laukifossen.jpg' class='popup-image'></a>");

    L.marker([61.832533331352266, 6.81289993511424], {
            icon: icons.main
        }).addTo(map)
        .bindPopup("<a href='singerheimen.html'><H3>Singerheimen</H3><p>A collection of beautiful buildings built by billionaire Willam Singer in 1921. Today protected through use.</p><img src='../images/singerheimen.jpg' class='popup-image'></a>");

    L.marker([61.85855378132025, 6.832809190327688], {
            icon: icons.hike
        }).addTo(map)
        .bindPopup("<a href='huaren.html'><H3>Huaren</H3><p>Family-friendly tour with great views.</p><img src='../images/huaren.jpg' class='popup-image'> <style='opacity:0'></a>");

    L.marker([61.84875878015604, 6.771772936299873], {
            icon: icons.hike
        }).addTo(map)
        .bindPopup("<a href='skarstein.html'><H3>Skarsteinsetra</H3><p>Family-friendly hike up to a beautiful seat with a view of the fjord.</p><img src='../images/skarstein.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Sponsored tags
    // Stabukk
    L.marker([61.83514629201231, 6.80473671906396], {
            icon: icons.food
        })
        .addTo(map)
        .bindPopup("<a href='./info/stabukk.html'><H3>Stabukk</H3><p>Café with ice cream and coffee</p><img src='../../info/images/placeholder.png' class='popup-image'> <style='opacity:0'></a>");

    // Isabella
    L.marker([61.83945710069584, 6.809481206796373], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/isabella.html'><H3>Isabella</H3><p>Go fishing on the crystal clear fjord</p><img src='../../info/images/placeholder.png' class='popup-image'> <style='opacity:0'></a>");

    // Olden Taxi
    L.marker([61.8440950197931, 6.812049007972068], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/olden_taxi.html'><H3>Olden Taxi</H3><p>Your transport. On your terms</p><img src='../../info/images/taxi.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Bunnpris
    L.marker([61.83525424656778, 6.804800555021214], {
            icon: icons.store
        })
        .addTo(map)
        .bindPopup("<a href='./info/bunnpris.html'><H3>Bunnpris</H3><p>Local grocery store with a wide selection and friendly staff</p><img src='../../info/images/placeholder.png' class='popup-image'> <style='opacity:0'></a>");

    // Olden Apartments
    L.marker([61.835241835095, 6.804609916147261], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/apartments.html'><H3>Olden Apartments</H3><p>Beautiful apartments right by the Olde river</p><img src='../../info/images/placeholder.png' class='popup-image'> <style='opacity:0'></a>");

    // Briksdalen
    L.marker([61.663243698719754, 6.822264708197644], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/briksdalen.html'><H3>Briksdalen</H3><p>Spectacular nature at the Briksdal glacier</p><img src='../../info/images/info_bd3.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Vanberg Hytter
    L.marker([61.85860437934231, 6.767902005551665], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/vanberg.html'><H3>Vanberg Cabins</H3><p>Cosy cabins with a beautiful view of the fjord</p><img src='../../info/images/vangberg.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Ljós
    L.marker([61.843338644393654, 6.811956255183239], {
            icon: icons.store
        })
        .addTo(map)
        .bindPopup("<a href='./info/ljos.html'><H3>Ljós</H3><p>Handcrafted quality products</p><img src='../../info/images/ljos1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Olden Adventure
    L.marker([61.84271884019358, 6.810757925733879], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/olden_adventure.html'><H3>Olden Adventure</H3><p>Exciting activities for the whole family</p><img src='../../info/images/adventure1.jpeg' class='popup-image'> <style='opacity:0'></a>");

    // Olden Camping
    L.marker([61.7388721323572, 6.789532930089874], {
            icon: icons.camping
        })
        .addTo(map)
        .bindPopup("<a href='./info/olden_camping.html'><H3>Olden Camping</H3><p>Family-friendly camping by Lake Olden</p><img src='../../info/images/oldencamping6.jpg' class='popup-image'> <style='opacity:0'></a>");

    // The Viking Shop
    L.marker([61.83475925136581, 6.805342694945899], {
            icon: icons.store
        })
        .addTo(map)
        .bindPopup("<a href='./info/viking.html'><H3>The Viking Shop</H3><p>Souvenirs and Norwegian specialities</p><img src='../../info/images/viking2.jpeg' class='popup-image'> <style='opacity:0'></a>");

    // Singerheimen
    L.marker([61.83297613686762, 6.8146693722710263], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/singerheimen.html'><H3>Singerheimen</H3><p>Historic accommodation with charm and history</p><img src='../../info/images/singer2.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Olden Fjordhotel
    L.marker([61.84823079426946, 6.814474679106876], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/fjordhotel.html'><H3>Olden Fjord Hotel</H3><p>Classic fjord hotel with panoramic views</p><img src='../../info/images/fjordhotel1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Olden Active
    L.marker([61.84259220003629, 6.810708937466418], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/olden_active.html'><H3>Olden Active</H3><p>Guided tours and world-class nature experiences</p><img src='../../info/images/active1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Sundekiosken
    L.marker([61.84183231203744, 6.811405718967407], {
            icon: icons.food
        })
        .addTo(map)
        .bindPopup("<a href='./info/sunde.html'><H3>Sundekiosken</H3><p>Street food with Norwegian classics and tasty Thai dishes</p><img src='../../info/images/sunde1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Aabrekk Kafé
    L.marker([61.67911432283224, 6.815869210536484], {
            icon: icons.food
        })
        .addTo(map)
        .bindPopup("<a href='./info/aabrekk.html'><H3>Aabrekk Café</H3><p>Homely café with local dishes</p><img src='../../info/images/aabrekk1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Aabrekk Hytter
    L.marker([61.67821684927461, 6.813822979973412], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/aabrekk.html'><H3>Aabrekk Cabins</H3><p>Spacious cabins in beautiful nature near Briksdalen</p><img src='../../info/images/aabrekk2.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Flåten Feriehytter
    L.marker([61.75732649403623, 6.808569237792529], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/flaaten.html'><H3>Flåten Holiday Cabins</H3><p>Idyllic holiday cabins by the lake</p><img src='../../info/images/flaaten4.png' class='popup-image'> <style='opacity:0'></a>");

    // Olden Farm
    L.marker([61.82741634975917, 6.814167637414622], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/farm.html'><H3>Olden Farm</H3><p>Experience authentic farm life</p><img src='../../info/images/farm2.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Fjordblikk Hytter
    L.marker([61.845129914010165, 6.817369782609704], {
            icon: icons.accommodation
        })
        .addTo(map)
        .bindPopup("<a href='./info/muri_hytter.html'><H3>Fjordblikk Cabins</H3><p>Cosy cabins with stunning fjord views</p><img src='../../info/images/muri1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Skogstad Olden
    L.marker([61.83548622483675, 6.8069284010959], {
            icon: icons.store
        })
        .addTo(map)
        .bindPopup("<a href='./info/skogstad.html'><H3>Skogstad Olden</H3><p>Quality clothing for the Norwegian outdoors</p><img src='../../info/images/skogstad1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Riccovero
    L.marker([61.837158157963835, 6.8095992788072035], {
            icon: icons.store
        })
        .addTo(map)
        .bindPopup("<a href='./info/riccovero.html'><H3>Riccovero</H3><p>Tailoring heritage meets innovative design</p><img src='../../info/images/riccovero1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Olden Sauna
    L.marker([61.757301445985966, 6.810304052446991], {
            icon: icons.wellness
        })
        .addTo(map)
        .bindPopup("<a href='./info/olden_sauna.html'><H3>Olden Sauna</H3><p>Relaxation and wellbeing right by the water</p><img src='../../info/images/badstue2.jpeg' class='popup-image'> <style='opacity:0'></a>");

    // Discover Olden
    L.marker([61.866150314662946, 6.73004665169674], {
            icon: icons.adventure
        })
        .addTo(map)
        .bindPopup("<a href='./info/discover.html'><H3>Discover Olden</H3><p>Your guide to the best experiences in Olden</p><img src='../../info/images/discover1.jpg' class='popup-image'> <style='opacity:0'></a>");

    // Gryta Camping
    L.marker([61.74095025385795, 6.791149855441869], {
            icon: icons.camping
        })
        .addTo(map)
        .bindPopup("<a href='./info/gryta.html'><H3>Gryta Camping</H3><p>Natural and peaceful camping by Lake Olden</p><img src='../../info/images/gryta1.jpg' class='popup-image'> <style='opacity:0'></a>");

    var locationControl = L.control({
        position: 'topleft'
    });

    locationControl.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        div.innerHTML = '<a href="#" title="Show my location" role="button" aria-label="Show my location" style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background-color: white; text-decoration: none; color: black; font-size: 18px;"><i class="fa-solid fa-map-pin"></i></a>';

        div.onclick = function() {
            map.locate({
                watch: true,
                enableHighAccuracy: true,
                maximumAge: 10000,
            });
            return false;
        };

        return div;
    };

    locationControl.addTo(map);

    var locationMarker, locationCircle;

    function onLocationFound(e) {
        var radius = e.accuracy;

        if (!locationMarker) {
            locationMarker = L.circleMarker(e.latlng, {
                radius: 8,
                fillColor: '#3a7ec9',
                color: "FFF",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            locationCircle = L.circle(e.latlng, {
                radius: radius,
                color: '#3a7ec9',
                fillColor: '#3a7ec9',
                fillOpacity: 0.1
            }).addTo(map);

            map.setView(e.latlng);
        } else {
            locationMarker.setLatLng(e.latlng);
            locationCircle.setLatLng(e.latlng);
            locationCircle.setRadius(radius);
        }

    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
}


// Info page maps
const briksdalen_info_map = document.getElementById('briksdalen_info_map');
if (briksdalen_info_map) {
    var amap = L.map('briksdalen_info_map', {
        zoomControl: false
    }).setView([61.778888681509386, 6.822197111271428], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.663243698719754, 6.822264708197644], {
        icon: icons.accommodation
    }).addTo(amap).bindPopup("Briksdalen");
}

const vanberg_map = document.getElementById('vanberg_map');
if (vanberg_map) {
    var amap = L.map('vanberg_map', {
        zoomControl: false
    }).setView([61.85885896648801, 6.8005823367979845], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.85860437934231, 6.767902005551665]).addTo(amap).bindPopup("Vanberg Hytter");
}

const ljos_map = document.getElementById('ljos_map');
if (ljos_map) {
    var amap = L.map('ljos_map', {
        zoomControl: false
    }).setView([61.84371231074744, 6.805446122618148], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.843338644393654, 6.811956255183239]).addTo(amap).bindPopup("Ljós");
}

const oadventure_map = document.getElementById('oadventure_map');
if (oadventure_map) {
    var amap = L.map('oadventure_map', {
        zoomControl: false
    }).setView([61.84271884019358, 6.810757925733879], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.84271884019358, 6.810757925733879]).addTo(amap).bindPopup("Olden Adventure");
}

const ocamping_map = document.getElementById('ocamping_map');
if (ocamping_map) {
    var amap = L.map('ocamping_map', {
        zoomControl: false
    }).setView([61.80052927166301, 6.8164155322043065], 10.2);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.7388721323572, 6.789532930089874]).addTo(amap).bindPopup("Olden Camping");
}

const viking_map = document.getElementById('viking_map');
if (viking_map) {
    var amap = L.map('viking_map', {
        zoomControl: false
    }).setView([61.83966872377449, 6.805572517516001], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83475925136581, 6.805342694945899]).addTo(amap).bindPopup("The Viking Shop");
}

const singer_map = document.getElementById('singer_map');
if (singer_map) {
    var amap = L.map('singer_map', {
        zoomControl: false
    }).setView([61.838245193841246, 6.805374402310553], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83249268584146, 6.813125114976453]).addTo(amap).bindPopup("Singerheimen");
}

const fjordhotel_map = document.getElementById('fjordhotel_map');
if (fjordhotel_map) {
    var amap = L.map('fjordhotel_map', {
        zoomControl: false
    }).setView([61.845627541933624, 6.806580134296458], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.84823079426946, 6.814474679106876]).addTo(amap).bindPopup("Olden Fjordhotel");
}

const active_map = document.getElementById('active_map');
if (active_map) {
    var amap = L.map('active_map', {
        zoomControl: false
    }).setView([61.843669499336954, 6.80554200020884], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.84259220003629, 6.810708937466418]).addTo(amap).bindPopup("Olden Active");
}

const sunde_map = document.getElementById('sunde_map');
if (sunde_map) {
    var amap = L.map('sunde_map', {
        zoomControl: false
    }).setView([61.84024002520122, 6.80479946563558], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.84183231203744, 6.811405718967407]).addTo(amap).bindPopup("Sundekiosken");
}

const aabrekk_map = document.getElementById('aabrekk_map');
if (aabrekk_map) {
    var amap = L.map('aabrekk_map', {
        zoomControl: false
    }).setView([61.778888681509386, 6.822197111271428], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.67911432283224, 6.815869210536484]).addTo(amap).bindPopup("Kafé");
    L.marker([61.67821684927461, 6.813822979973412]).addTo(amap).bindPopup("Hytter");

}

const flaaten_map = document.getElementById('flaaten_map');
if (flaaten_map) {
    var amap = L.map('flaaten_map', {
        zoomControl: false
    }).setView([61.80155312901155, 6.813335198470627], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.75732649403623, 6.808569237792529]).addTo(amap).bindPopup("Flåten Feriehytter");
}

const farm_map = document.getElementById('farm_map');
if (farm_map) {
    var amap = L.map('farm_map', {
        zoomControl: false
    }).setView([61.83711326139425, 6.8055707629523585], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.82741634975917, 6.814167637414622]).addTo(amap).bindPopup("Olden Farm");
}

const muri_map = document.getElementById('muri_map');
if (muri_map) {
    var amap = L.map('muri_map', {
        zoomControl: false
    }).setView([61.84208435893307, 6.805471744505528], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.845129914010165, 6.817369782609704]).addTo(amap).bindPopup("Fjordblikk Hytter");
}

const skogstad_map = document.getElementById('skogstad_map');
if (skogstad_map) {
    var amap = L.map('skogstad_map', {
        zoomControl: false
    }).setView([61.83839384301383, 6.80482955631565], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83548622483675, 6.8069284010959]).addTo(amap).bindPopup("Skogstad Olden");
}

const riccovero_map = document.getElementById('riccovero_map');
if (riccovero_map) {
    var amap = L.map('riccovero_map', {
        zoomControl: false
    }).setView([61.83839384301383, 6.80482955631565], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.837158157963835, 6.8095992788072035]).addTo(amap).bindPopup("Riccovero");
}

const badstue_map = document.getElementById('badstue_map');
if (badstue_map) {
    var amap = L.map('badstue_map', {
        zoomControl: false
    }).setView([61.800881460517544, 6.824725052463083], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.757301445985966, 6.810304052446991]).addTo(amap).bindPopup("Olden Sauna");
}

const discover_map = document.getElementById('discover_map');
if (discover_map) {
    var amap = L.map('discover_map', {
        zoomControl: false
    }).setView([61.860081444817325, 6.797115169805129], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.866150314662946, 6.73004665169674]).addTo(amap).bindPopup("Discover Olden");
}

const bunnpris_map = document.getElementById('bunnpris_map');
if (bunnpris_map) {
    var amap = L.map('bunnpris_map', {
        zoomControl: false
    }).setView([61.837212460389935, 6.804374926430985], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83525047096347, 6.804831137071842]).addTo(amap).bindPopup("Bunnpris Olden");
}

const apartments_map = document.getElementById('apartments_map');
if (apartments_map) {
    var amap = L.map('apartments_map', {
        zoomControl: false
    }).setView([61.837212460389935, 6.804374926430985], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83525047096347, 6.804831137071842]).addTo(amap).bindPopup("Olden Apartments");
}

const stabukk_map = document.getElementById('stabukk_map');
if (stabukk_map) {
    var amap = L.map('stabukk_map', {
        zoomControl: false
    }).setView([61.837212460389935, 6.804374926430985], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.83515711604809, 6.804742926055739]).addTo(amap).bindPopup("Stabukk");
}

const gryta_map = document.getElementById('gryta_map');
if (gryta_map) {
    var amap = L.map('gryta_map', {
        zoomControl: false
    }).setView([61.78987493615204, 6.821755840106871], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(amap);

    L.marker([61.74095025385795, 6.791149855441869]).addTo(amap).bindPopup("Gryta Camping");
}

const mat_map = document.getElementById('mat_map');
if (mat_map) {

    var map = L.map('mat_map', {
        zoomControl: false
    }).setView([61.84017770961436, 6.805104792299194], 14, 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    L.marker([61.841857038014155, 6.811442067471242], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='sundekiosken.html'><H3>Sundekiosken</H3><p>Sundekiosken is a fast-food restaurant serving both traditional street food such as burgers and shaved meat, as well as Asian dishes like spring rolls and noodles.</p><img src='../images/sunde2.jpg' class='popup-image'> <style='opacity:0'></a>");

    L.marker([61.8425222198133, 6.810743183913986], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='molla.html'><H3>Mølla Guesthouse</H3><p>Mølla is a restaurant located right by the fjord, serving both seafood and pizza.</p><img src='../images/molla3.jpg' class='popup-image'> <style='opacity:0'></a>");


    L.marker([61.848272904545304, 6.814688885941699], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='fjordhotel.html'><H3>Olden Fjord Hotel</H3><p>Olden Fjord Hotel offers a dinner buffet open to all, every day from 19:00–22:00.</p><img src='../images/fjordhotel1.jpg' class='popup-image'> <style='opacity:0'></a>");


    L.marker([61.83452678782124, 6.804963791435792], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='yris.html'><H3>Yris Café</H3><p>Yris Café, located in the centre of Olden, offers ice cream, coffee and food service.</p><img src='../images/yris1.jpg' class='popup-image'> <style='opacity:0'></a>");

    L.marker([61.83514958988893, 6.804779749846841], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='stabukk.html'><H3>Stabukk</H3><p>Stabukk is a café in the heart of Olden serving ice cream, shakes, pastries and coffee.</p><img src='../images/stabukk5.jpg' class='popup-image'> <style='opacity:0'></a>");

    L.marker([61.83237864928943, 6.813073108002821], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map)
        .bindPopup("<a href='singer-food.html'><H3>Singerheimen</H3><p>At Singerheimen they serve afternoon tea in surroundings full of tradition and history.</p><img src='../images/singer-food.jpg' class='popup-image'> <style='opacity:0'></a>");
}

const huaren_map = document.getElementById('huaren_map');
if (huaren_map) {
    var map = L.map('huaren_map', {
        zoomControl: false
    }).setView([61.845, 6.81], 13.4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.83522928170395, 6.805438844524453],
        [61.83510989916581, 6.805666476071265],
        [61.83543006037789, 6.807174822217905],
        [61.8352412199332, 6.807526616362512],
        [61.83501656340352, 6.807568003914438],
        [61.83448910247555, 6.807763445113821],
        [61.8346355485363, 6.811443093141275],
        [61.834738653257666, 6.811923648541424],
        [61.83470392328624, 6.812411101900237],
        [61.83526555533131, 6.812915767090366],
        [61.83648864041504, 6.814109602973516],
        [61.836953886078476, 6.814366044218758],
        [61.83785012274254, 6.8144714332400484],
        [61.838917214571175, 6.815163689774192],
        [61.84149482904188, 6.816528654771473],
        [61.843440936269985, 6.81807736905455],
        [61.84380842764623, 6.818652605816912],
        [61.84489417186932, 6.8199181266163045],
        [61.84524911836711, 6.820396015582556],
        [61.84731607816154, 6.821272145432442],
        [61.84756243376611, 6.8215110899155675],
        [61.8479465775387, 6.821546489098252],
        [61.848263910068525, 6.821980129086147],
        [61.849140652384136, 6.822612609276477],
        [61.84967508446396, 6.823320592930181],
        [61.85017610609867, 6.8233117431518595],
        [61.85110234156844, 6.824180733121702],
        [61.85447104014037, 6.825457726384497],
        [61.856718009895005, 6.828247223784809],
        [61.858003330510705, 6.82929862333855],
        [61.85853466211569, 6.828783639227883],
        [61.85896478095372, 6.8290625889544945],
        [61.85903056330259, 6.829448827037494],
        [61.85797802877592, 6.830800660327992],
        [61.85677870256323, 6.83074701616873],
        [61.85608033911104, 6.830961592881508],
        [61.85580200141628, 6.830757745004369],
        [61.85501252071778, 6.830950864072794],
        [61.85476959949799, 6.830661185510544],
        [61.85470886889221, 6.830725558524378],
        [61.854997338197954, 6.831326373320155],
        [61.855432567450976, 6.831626780718044],
        [61.855690665600456, 6.832270510856377],
        [61.85666230974715, 6.833418496391319],
        [61.85711269683765, 6.83378327680304],
        [61.85729487400544, 6.834212430228597],
        [61.85724428812593, 6.8344454787670985],
        [61.85735898569337, 6.834585772760908],
        [61.857647430063565, 6.834516035326941],
        [61.85776887951008, 6.834521399744761],
        [61.85803197093062, 6.833668405335978],
        [61.858330576962366, 6.83318029527223],
        [61.858548168695705, 6.832799421607049],
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);

    var latlngs2 = [
        [61.850341250198994, 6.823405047232877],
        [61.85066264075746, 6.8235200062623225],
        [61.850755039919456, 6.823502975294996],
        [61.850927785431765, 6.8236136765826085],
        [61.85110253862238, 6.823626449808102],
        [61.851568542270186, 6.823285830448079],
        [61.85187385116602, 6.8233241501150435],
        [61.85251257967312, 6.822847283021097],
        [61.85382012388364, 6.822149013331056],
        [61.855155729739565, 6.821237856520734],
        [61.85585664847606, 6.82099516521048],
        [61.85675536161966, 6.820566037299747],
        [61.856555469206256, 6.820287087573137],
        [61.85558888242625, 6.819874027398514],
        [61.85553827494919, 6.819621899761001],
        [61.85555851795003, 6.8194824248976955],
        [61.85581155433259, 6.819466331644237],
        [61.856871754069985, 6.818650940122219],
        [61.85685151193647, 6.818500736423275],
        [61.85642136343876, 6.818473914334177],
        [61.856320151150186, 6.818393448066885],
        [61.85593554140537, 6.818200329025386],
        [61.85585457031779, 6.818184235771927],
        [61.85533837459566, 6.818087676238345],
        [61.85487277883677, 6.817867735101015],
        [61.85372394166729, 6.817116716590094],
        [61.85366320898972, 6.817116716590094],
        [61.85290404034846, 6.8162959606412095],
        [61.85278257162405, 6.816033104168056],
        [61.8514892097855, 6.816118610116224],
        [61.850797380168814, 6.816055535948887],
        [61.85011297421856, 6.815645553919468],
        [61.84945087133016, 6.814723094362315],
        [61.849056578536285, 6.814439260633883],
        [61.848948705099026, 6.8142185010817435],
        [61.848825952085406, 6.814257922414884],
        [61.84879699543432, 6.814234113316523],
        [61.84843904300263, 6.813975195024825],
        [61.84810097297975, 6.813981216380445],
        [61.847861688524986, 6.813934300546741],
        [61.84735082351413, 6.813621393467651],
        [61.84703680133915, 6.8135021907646225],
        [61.84691494112474, 6.8134574897533255],
        [61.84533540141052, 6.812975712168414],
        [61.84444248020394, 6.812618104061667],
        [61.843744061776924, 6.812027057348348],
        [61.842912032469854, 6.811277073689024],
        [61.84281593747995, 6.811182704866752],
        [61.84207529291777, 6.810810196439265],
        [61.841719027128725, 6.810899598456019],
        [61.841590114145376, 6.810919465573905],
        [61.84145885673628, 6.8112969407804265],
        [61.841060393285545, 6.811639648556696],
        [61.840495503899696, 6.811758851253491],
        [61.84018609948335, 6.811659515669713],
        [61.83959306563801, 6.811540312973307],
        [61.839286637304966, 6.811278971686882],
        [61.8387436708393, 6.81128782147292],
        [61.83832390940932, 6.811106400694625],
        [61.838138043061385, 6.8109072803315955],
        [61.838183987656336, 6.810482490227123],
        [61.83686409730504, 6.809544412040884],
        [61.836479814765305, 6.809296617813273],
        [61.83639418592852, 6.80922581944934],
        [61.835713323787985, 6.807977998498714],
        [61.83532484965081, 6.8070443451844085],
        [61.835044978141745, 6.806026618844037],
        [61.83501573768809, 6.8057611250287415],
        [61.83524130618015, 6.805548729976506],
        [61.83522928170395, 6.805438844524453]
    ];

    var polyline = L.polyline(latlngs2, {
        color: 'orange'
    }).addTo(map);
}

const kjenndalen_map = document.getElementById('kjenndalen_map');
if (kjenndalen_map) {
    var map = L.map('kjenndalen_map', {
        zoomControl: false
    }).setView([61.829125478313316, 6.923411386989772], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.835208784985305, 6.805556463765776],
        [61.8349370026776, 6.805775021815464],
        [61.835082771689294, 6.806508480442586],
        [61.83518982036615, 6.807092352112862],
        [61.83603936365725, 6.808834316406961],
        [61.83656775404779, 6.809582251204631],
        [61.838296346949534, 6.810943010019168],
        [61.83927788928256, 6.811164977784102],
        [61.84007949685697, 6.810889930791171],
        [61.84099949787469, 6.810581106106067],
        [61.84164621476328, 6.8105714553395735],
        [61.84222005072028, 6.810764470788013],
        [61.842705070355834, 6.811025041622693],
        [61.843994499796956, 6.812118117383477],
        [61.84453413783629, 6.812460719798787],
        [61.845095003852734, 6.812710613968654],
        [61.84849051589074, 6.8137701208918315],
        [61.85016411687753, 6.81469874103286],
        [61.852827670345256, 6.815645933614127],
        [61.85494783365731, 6.815720223246908],
        [61.85721677160148, 6.8153673475625665],
        [61.85865788096203, 6.814624851740779],
        [61.85924781723451, 6.81469781560497],
        [61.85979349820361, 6.815218986102713],
        [61.86031458986757, 6.81602158863293],
        [61.86045223523879, 6.81657402931895],
        [61.86112078969134, 6.818992260312641],
        [61.86129284178221, 6.819304962587747],
        [61.86333281439486, 6.8240163436311665],
        [61.86426181716462, 6.824725135567133],
        [61.86456164801737, 6.82455836102041],
        [61.865977203269395, 6.8236515243645695],
        [61.86674884994442, 6.823703641441481],
        [61.86741235222667, 6.824402009855882],
        [61.86783010555061, 6.82531926986286],
        [61.86800211998539, 6.8262990704115],
        [61.86812498683602, 6.8272163304184765],
        [61.86821345066908, 6.832229990370746],
        [61.86773672591199, 6.835471670622673],
        [61.86775147008904, 6.835659292317977],
        [61.867618772251134, 6.83880716188737],
        [61.865726536824894, 6.846113971858307],
        [61.86584941280228, 6.848282040965704],
        [61.86617380301507, 6.849261841679059],
        [61.8665768284943, 6.849730895091717],
        [61.86984198892078, 6.850988715872585],
        [61.87054262759301, 6.850528706472528],
        [61.871232622346774, 6.848749957629481],
        [61.871402464825366, 6.845867934187583],
        [61.87234719642346, 6.8464083135829386],
        [61.87249580323599, 6.847173851059694],
        [61.87214551459609, 6.852352486931854],
        [61.87215612946221, 6.855752373960968],
        [61.871105239869784, 6.85674306951912],
        [61.87025600981843, 6.85820659704821],
        [61.87001185182105, 6.8624395689784965],
        [61.868631791701404, 6.863768002001295],
        [61.868238994013055, 6.866447383169936],
        [61.8686954881526, 6.871648535234287],
        [61.86779310945576, 6.876759623682027],
        [61.86736845145953, 6.8803396371762595],
        [61.86491593632261, 6.885135504779728],
        [61.86333390684381, 6.886306326802999],
        [61.86210220309868, 6.8893009296564],
        [61.860148364694226, 6.889841309051757],
        [61.8593625466795, 6.8914849632507895],
        [61.85797138709029, 6.894839818663623],
        [61.85561370516187, 6.895785482706142],
        [61.85509329151626, 6.898194674185049],
        [61.85475342476222, 6.906548039004925],
        [61.85165196652264, 6.912222022828319],
        [61.851418282284435, 6.915869584010062],
        [61.85053663940859, 6.918211228056605],
        [61.849145079115864, 6.923840180452657],
        [61.84663798675941, 6.930234670218635],
        [61.846436135663865, 6.932373671991919],
        [61.84424755948661, 6.937147023663645],
        [61.84312133805523, 6.937642371469209],
        [61.84133629864906, 6.941672701126238],
        [61.84115566387263, 6.944081892597199],
        [61.84029497759876, 6.945635483841777],
        [61.839296126278974, 6.945838126138874],
        [61.83799969630364, 6.948630086348212],
        [61.834312009759216, 6.949012855154572],
        [61.832250112793936, 6.951196888617412],
        [61.82789203962577, 6.966507638605408],
        [61.82533005413149, 6.972384264529903],
        [61.82530879189348, 6.975513962241856],
        [61.82185349104785, 6.9828766316519015],
        [61.8190251706813, 6.985961297517149],
        [61.81774915135342, 6.988528099766924],
        [61.816005172560075, 6.988528099766924],
        [61.81478220144046, 6.9906896176017295],
        [61.81367616827926, 6.99469743145062],
        [61.81176178590772, 6.995845737842322],
        [61.80653916940693, 7.001947522001839],
        [61.80415856541303, 7.005534505014514],
        [61.80145628726402, 7.01159125746858],
        [61.80015825809012, 7.01064559351788],
        [61.79648730503735, 7.002292228728022],
        [61.79410361086259, 6.999432721094263],
        [61.79123016219058, 6.999049952450355],
        [61.78959111193114, 6.997608940729406],
        [61.78902700292849, 6.998689699527179],
        [61.78838837653473, 6.998419509829501],
        [61.78657886298896, 6.999973100544357],
        [61.78064929876631, 7.0109157834627585],
        [61.78032990019655, 7.012514405840687],
        [61.77995726433832, 7.013077301044183],
        [61.778871271157875, 7.012739564037739],
        [61.77745516362828, 7.016477188548274],
        [61.77513388402504, 7.020507518205304],
        [61.774590807083904, 7.022218719623929],
        [61.7733555375438, 7.023997468466976],
        [61.77095939905025, 7.030414474172644],
        [61.770181945149915, 7.030549569021481],
        [61.767189096681285, 7.035593110162228],
        [61.766496759279306, 7.036358647684892],
        [61.76502682211013, 7.039848598074582],
        [61.76350355228471, 7.040388977469938],
        [61.763077449290655, 7.0413346415036315],
        [61.762065431111594, 7.041739926050148],
        [61.76121317945961, 7.041289609887352],
        [61.76029698254248, 7.041177030911985],
        [61.758688245328045, 7.039668471766617],
        [61.75847516124415, 7.037777143882871],
        [61.757899826848075, 7.037394375144494],
        [61.75754822831121, 7.037732112266592],
        [61.756663886904455, 7.037597017419518],
        [61.755033648906846, 7.036561290245086],
        [61.75461808423421, 7.034805057210179],
        [61.75401071034865, 7.034422288470916],
        [61.75287052006342, 7.033949456499979],
        [61.752273768124645, 7.034377256854636],
        [61.74999321655499, 7.033566687788972],
        [61.749321807059225, 7.034129582992468],
        [61.747435387700364, 7.035075246946702],
        [61.74725327902444, 7.035459416261209],
        [61.7470497946385, 7.035435534637813],
        [61.74695558844885, 7.035316126520833]
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);



    var latlngs2 = [
        [61.74695558844885, 7.035316126520833],
        [61.74665671688989, 7.035180135963998],
        [61.74613360423682, 7.035051389936332],
        [61.74560540378816, 7.035512729869646],
        [61.74503656241849, 7.035587831719119],
        [61.744787691014814, 7.035630747061674],
        [61.74467595217931, 7.035544916376564],
        [61.74435089144319, 7.035212322471758],
        [61.74414772673345, 7.035040661092281],
        [61.74393858158816, 7.034864066144338]
    ];

    var polyline2 = L.polyline(latlngs2, {
        color: 'orange'
    }).addTo(map);
}


const lauki_map = document.getElementById('lauki_map');
if (lauki_map) {
    var map = L.map('lauki_map', {
        zoomControl: false
    }).setView([61.815, 6.8], 13.459);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.83522928170395, 6.805438844524453],
        [61.834953312531724, 6.805791029105154],
        [61.83525107211915, 6.807169755167968],
        [61.8349717307344, 6.8073128305141095],
        [61.83459108563202, 6.807039686671475],
        [61.834112202826724, 6.806994162697704],
        [61.8332710700432, 6.806246268845685],
        [61.831238748954604, 6.80763149836469],
        [61.8308764781862, 6.807729049750064],
        [61.82499126288357, 6.809204676336429],
        [61.8230940254241, 6.809915844377534],
        [61.822032649491625, 6.810168711529756],
        [61.82091816528967, 6.810112518833792],
        [61.81809197031927, 6.810814927575762],
        [61.81785312497947, 6.80973321818892],
        [61.81696407337476, 6.809915844450803],
        [61.81672521930217, 6.810182759756632],
        [61.81596220078703, 6.810140615234659],
        [61.815682556118304, 6.809863712283634],
        [61.81563428706245, 6.809644716894844],
        [61.81512745739421, 6.80890743241925],
        [61.81507573959035, 6.8088125343642],
        [61.81464130676931, 6.806907274481726],
        [61.81448615070064, 6.8063743857023375],
        [61.81374828664111, 6.8064838833752646],
        [61.812948177146495, 6.806582596520777],
        [61.812698314727186, 6.80692949589347],
        [61.81186643403009, 6.806894096733367],
        [61.81152313425896, 6.806906555128608],
        [61.809858759291, 6.8058905238438205],
        [61.80807817848818, 6.804572263428836],
        [61.809085167386506, 6.80412668311289],
        [61.80758320573976, 6.802464788961519],
        [61.8071316038403, 6.802281987671037],
        [61.805823840359665, 6.8026467681315586],
        [61.804252423036864, 6.801552426896392],
        [61.80499251992051, 6.800930154429337],
        [61.80601646017751, 6.8004795433325045],
        [61.80545887318149, 6.8001791359346155],
        [61.80612797636205, 6.799192083055837],
        [61.80535749264014, 6.799299371412227],
        [61.80506348717787, 6.798762929630282],
        [61.804343668821865, 6.797883165107894],
        [61.805448735142406, 6.797775876751506],
        [61.80572246102298, 6.797217977298284],
        [61.80584411618686, 6.796531331817395],
        [61.806361145257675, 6.796230924419507],
        [61.80655376170586, 6.79552282126734],
        [61.8066044500441, 6.794578683731118],
        [61.808317666733295, 6.7933770537668385],
        [61.808925886337605, 6.793419969109394],
        [61.809118486701124, 6.7929908156838374],
        [61.810294336455904, 6.793226850038445],
        [61.811341028092066, 6.793854587386976]
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);
}

const skarstein_map = document.getElementById('skarstein_map');
if (skarstein_map) {
    var map = L.map('skarstein_map', {
        zoomControl: false
    }).setView([61.845, 6.8], 13, 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.83522928170395, 6.805438844524453],
        [61.835031019302804, 6.805168450481048],
        [61.8347833800212, 6.8050419405310745],
        [61.8347693295056, 6.804290322592992],
        [61.834822018902145, 6.8021136072044515],
        [61.83492915374295, 6.801868029031399],
        [61.83541740284337, 6.800721997719868],
        [61.83593374416654, 6.800375955774099],
        [61.83629377294322, 6.800338746953758],
        [61.83662042954263, 6.800468977778778],
        [61.8366906778172, 6.800364793114094],
        [61.83687859116092, 6.800576883324344],
        [61.83714728768055, 6.800643859180212],
        [61.8377110158817, 6.8004168854366585],
        [61.838740100447815, 6.799215040838812],
        [61.83914751005813, 6.798634583369194],
        [61.8396128635427, 6.798500631651475],
        [61.840229314341634, 6.797414001003756],
        [61.84161409850518, 6.7966377097898105],
        [61.84218572785473, 6.796273728081504],
        [61.84323879839238, 6.795391620740967],
        [61.84330376403145, 6.795079066746912],
        [61.84340560178328, 6.794383262022054],
        [61.84354606709296, 6.794182334454447],
        [61.84432388211218, 6.794074428892685],
        [61.844524039000596, 6.79389582657273],
        [61.84470312562576, 6.793572109936031],
        [61.844804958730485, 6.793426995581649],
        [61.845166639103084, 6.793371182359817],
        [61.84537908043401, 6.793062349246645],
        [61.84541068315664, 6.7929432810186015],
        [61.845675793554236, 6.791622368305635],
        [61.845826782564615, 6.7915181836294245],
        [61.84610242336926, 6.791767482653452],
        [61.846371039087536, 6.791685623274058],
        [61.84754379128346, 6.7903981984491955],
        [61.84811435061063, 6.789936809171146],
        [61.84963286445738, 6.788083810403986],
        [61.85086265459876, 6.7864374226204776],
        [61.85178667822614, 6.784699894127557],
        [61.85305214111401, 6.781621653985933],
        [61.853153045048124, 6.781171337832439],
        [61.853131802150706, 6.780315737090478],
        [61.85312649142192, 6.779595231244888],
        [61.85298841215083, 6.77924623622593],
        [61.85277067049809, 6.7794151047834905],
        [61.8522980064623, 6.780687247918876],
        [61.85177222554909, 6.781328948437604],
        [61.851596963240674, 6.781419011668303],
        [61.85125115822293, 6.7814987881320175],
        [61.85084751545131, 6.781723946208764],
        [61.84972684779065, 6.782770931265637],
        [61.84950908297036, 6.782770931265637],
        [61.84940816704133, 6.78237690463133],
        [61.84886640212579, 6.782478225743797],
        [61.848244954155255, 6.781892814744254],
        [61.847485389529275, 6.781510046013784],
        [61.846338039427295, 6.780789540145678],
        [61.84591839603667, 6.7804630609343945],
        [61.84578028429757, 6.779810102511829],
        [61.8458759001832, 6.779562428627407],
        [61.847490701211946, 6.778515443570533],
        [61.84848788959279, 6.777238665949523],
        [61.84866505614606, 6.776208697705473],
        [61.84912062259109, 6.775801001909965],
        [61.84987988491252, 6.773526488754522],
        [61.849869761538585, 6.772271214984773],
        [61.850143091467565, 6.771863519209038],
        [61.85040123416722, 6.770136176493648],
        [61.85024938578954, 6.770007430465982],
        [61.84885234542458, 6.770522414576649],
        [61.84857900396478, 6.771144687086194]
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);
}

const toilet_map = document.getElementById('toilet_map');
if (toilet_map) {
    var map = L.map('toilet_map', {
        zoomControl: false
    }).setView([61.837268553540305, 6.807555672099274], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([61.83545797623981, 6.805650130396526]).addTo(map)
        .bindPopup("<H3>Toalett</H3><img src='./images/toilet1.jpg' class='toiletimg'>");

    L.marker([61.836826234006985, 6.806368962568347]).addTo(map)
        .bindPopup("<H3>Toalett</H3><img src='./images/toilet2.jpg' class='toiletimg'>");

    L.marker([61.838870667881864, 6.809051973013834]).addTo(map)
        .bindPopup("<H3>Toalett</H3><img src='./images/toilet3.jpg' class='toiletimg'>");

    L.marker([61.85984345786699, 6.814774301942007]).addTo(map)
        .bindPopup("<H3>Toalett</H3><img src='./images/toilet4.jpg' class='toiletimg'>");
}

const skylift_map = document.getElementById('skylift_map');
if (skylift_map) {
    var map = L.map('skylift_map', {
        zoomControl: false
    }).setView([61.85464679307173, 6.819380924314439], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.835208784985305, 6.805556463765776],
        [61.8349370026776, 6.805775021815464],
        [61.835082771689294, 6.806508480442586],
        [61.83518982036615, 6.807092352112862],
        [61.83603936365725, 6.808834316406961],
        [61.83656775404779, 6.809582251204631],
        [61.838296346949534, 6.810943010019168],
        [61.83927788928256, 6.811164977784102],
        [61.84007949685697, 6.810889930791171],
        [61.84099949787469, 6.810581106106067],
        [61.84164621476328, 6.8105714553395735],
        [61.84222005072028, 6.810764470788013],
        [61.842705070355834, 6.811025041622693],
        [61.843994499796956, 6.812118117383477],
        [61.84453413783629, 6.812460719798787],
        [61.845095003852734, 6.812710613968654],
        [61.84849051589074, 6.8137701208918315],
        [61.85016411687753, 6.81469874103286],
        [61.852827670345256, 6.815645933614127],
        [61.85494783365731, 6.815720223246908],
        [61.85721677160148, 6.8153673475625665],
        [61.85865788096203, 6.814624851740779],
        [61.85924781723451, 6.81469781560497],
        [61.85979349820361, 6.815218986102713],
        [61.86031458986757, 6.81602158863293],
        [61.86045223523879, 6.81657402931895],
        [61.86112078969134, 6.818992260312641],
        [61.86129284178221, 6.819304962587747],
        [61.86333281439486, 6.8240163436311665],
        [61.86426181716462, 6.824725135567133],
        [61.86456164801737, 6.82455836102041],
        [61.865977203269395, 6.8236515243645695],
        [61.86674884994442, 6.823703641441481],
        [61.86741235222667, 6.824402009855882],
        [61.86783010555061, 6.82531926986286],
        [61.86800211998539, 6.8262990704115],
        [61.86812498683602, 6.8272163304184765],
        [61.86821345066908, 6.832229990370746],
        [61.86773672591199, 6.835471670622673],
        [61.86775147008904, 6.835659292317977],
        [61.867618772251134, 6.83880716188737],
        [61.865726536824894, 6.846113971858307],
        [61.86584941280228, 6.848282040965704],
        [61.86617380301507, 6.849261841679059],
        [61.8665768284943, 6.849730895091717],
        [61.86984198892078, 6.850988715872585],
        [61.87054262759301, 6.850528706472528],
        [61.871232622346774, 6.848749957629481],
        [61.871402464825366, 6.845867934187583],
        [61.87183539157396, 6.844695893753073],
        [61.8722422980136, 6.843987370870379],
        [61.87357533422135, 6.842351327131193],
        [61.87375144856753, 6.842029271222937],
        [61.87402472743153, 6.841417365110498],
        [61.87475649550896, 6.839497912169443],
        [61.874601641485484, 6.8392338263735475],
        [61.87445589580697, 6.839761997965338]
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);
}

const briksdalen_map = document.getElementById('briksdalen_map');
if (briksdalen_map) {
    var map = L.map('briksdalen_map', {
        zoomControl: false
    }).setView([61.75246705165772, 6.820822994097988], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latlngs = [
        [61.835208784985305, 6.805556463765776],
        [61.83495299173912, 6.805779253969773],
        [61.835200258578126, 6.807067824338831],
        [61.83495299173912, 6.807278571829098],
        [61.834577824453184, 6.806989546699589],
        [61.83322491034617, 6.806212791686704],
        [61.83296341585313, 6.806242898508569],
        [61.83120161672117, 6.807649512525815],
        [61.82820819115811, 6.808540006113653],
        [61.82196497256085, 6.81014769693044],
        [61.81617524960529, 6.811543600642565],
        [61.81493913220328, 6.814118991205313],
        [61.81320156110914, 6.816094583415013],
        [61.81222011175828, 6.82123793554716],
        [61.8089537510211, 6.82069294462214],
        [61.805316901316345, 6.824405695629877],
        [61.798927233202036, 6.828697499499952],
        [61.79506381681982, 6.8271987744982265],
        [61.7910389083109, 6.829651233793025],
        [61.79079739694615, 6.829821543539735],
        [61.78744824497946, 6.836020815646031],
        [61.78079716421524, 6.833874913948729],
        [61.77878384151563, 6.836054877846463],
        [61.77569112121357, 6.836395497192963],
        [61.77280752356536, 6.833500232767749],
        [61.77042311581877, 6.835271453369548],
        [61.76407453448489, 6.830332472671669],
        [61.76276920688898, 6.829889667375637],
        [61.759078536878796, 6.823451961726791],
        [61.757418396872886, 6.815651778691946],
        [61.75825653695223, 6.81146216021713],
        [61.75598383479221, 6.808805329314431],
        [61.7554196628319, 6.799574544654324],
        [61.74728794257965, 6.790021006729697],
        [61.74035180559198, 6.790172270237477],
        [61.737459933741555, 6.7864176203065005],
        [61.723257377034784, 6.794377478323091],
        [61.70598735786972, 6.799884298398517],
        [61.702807481384234, 6.804139568459657],
        [61.69587706272389, 6.809145768685627],
        [61.69112930235548, 6.8103472566635395],
        [61.6861908565709, 6.807944280652751],
        [61.67628784224664, 6.813901658733639],
        [61.67037301683514, 6.814702650820987],
        [61.667664646374185, 6.816655068857724],
        [61.66696223891831, 6.816264728577267],
        [61.66507506672092, 6.816245611968888],
        [61.66501155411423, 6.818042573790774],
        [61.66547428583041, 6.818635188859695],
        [61.66533818898626, 6.819113104237857],
        [61.66404977579936, 6.820470383957558],
        [61.66352350708213, 6.820795366414707],
    ];

    var polyline = L.polyline(latlngs, {
        color: 'red'
    }).addTo(map);

    var latlngs2 = [
        [61.66352350708213, 6.820795366414707],
        [61.66303287642473, 6.821741792270974],
        [61.66318565129831, 6.821800800866988],
        [61.663254399744986, 6.822069021757961],
        [61.66315764262804, 6.822691294225016],
        [61.66331805557772, 6.823270651349516],
        [61.66357670598808, 6.824286365027844],
        [61.66406668934884, 6.826272982403581],
        [61.66414448456662, 6.827678580945724],
        [61.664356652327236, 6.828567634392661],
        [61.6644462338408, 6.829188481872687],
        [61.664835203156805, 6.8296007245324395],
        [61.664960143776774, 6.8303755420616135],
        [61.6649766453314, 6.830966588769482],
        [61.665103942733914, 6.831349030755034],
        [61.66515108979344, 6.832466556105849],
        [61.66509922803113, 6.832650326930076],
        [61.66517466329295, 6.833161905170492],
        [61.66508979861047, 6.83359898172541],
        [61.66491299643991, 6.834016191164197],
        [61.66469611772202, 6.834115526826265],
        [61.66442501719242, 6.833405277424523],
        [61.66443916162671, 6.8328936991841065],
        [61.66434250786344, 6.832670194127614],
        [61.664236215439715, 6.833371919290116],
        [61.6642322462665, 6.833725933133714],
        [61.66405713857948, 6.8344472456913845],
        [61.663932405439304, 6.834939985316162],
        [61.66397398320865, 6.835085982242022],
        [61.66409178658461, 6.83550572340387],
        [61.66403808216011, 6.83610066087675],
        [61.664176674036156, 6.836578800851592],
        [61.66490814476101, 6.837111281962347],
        [61.665088309006705, 6.8380748617254055],
        [61.66531870982107, 6.8383048068836345],
        [61.66546249292201, 6.838739147754526],
        [61.66553698270007, 6.839469132418895],
        [61.66572753712013, 6.840505710592501],
        [61.66537760901039, 6.841845232448094],
        [61.66561285865416, 6.846962120220727],
        [61.66553317210629, 6.8475278583716905],
        [61.66543096514775, 6.848199444230647],
        [61.66549159642615, 6.848542537092861],
        [61.66533568716104, 6.849181273643499],
        [61.66508796304386, 6.849049876410225],
        [61.66500827514336, 6.849195873336084],
        [61.66503772504357, 6.849465967648926],
        [61.664883545843004, 6.849893008657067],
        [61.66502559861747, 6.849487867187806],
        [61.66489220761622, 6.849911258272799],
        [61.66496496641558, 6.85024340127913],
        [61.66495976936471, 6.850622993346762],
        [61.66511568052285, 6.851495325032729],
        [61.66498921930717, 6.852013614119531],
        [61.664980557561144, 6.852228959585175],
        [61.66481251920739, 6.85315239014124],
        [61.66470857749665, 6.853404234921071],
        [61.66478653381162, 6.855116048931881],
        [61.66474149241022, 6.855579589171486],
        [61.6648350398628, 6.856046779334239],
        [61.6648246457154, 6.85615992695178],
        [61.664675662551566, 6.856831512810737],
        [61.66457691749902, 6.856937360639806],
        [61.66457172038235, 6.8575943468061755],
        [61.66446431310588, 6.858200234093719],
        [61.66433611683852, 6.858411929636215],
        [61.664349975920075, 6.8586090254861265],
        [61.66430839865672, 6.8587805718740125],
        [61.66423217352854, 6.859068915802586],
    ];

    var polyline2 = L.polyline(latlngs2, {
        color: 'orange'
    }).addTo(map);
}