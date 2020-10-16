// creat map

const map = L.map('mapid').setView([-27.2206781,-49.6535601], 15);


//creat tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


// creat icon

const icon = l.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
// create popup overlay

const popup = l.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// creat and add maker

L
.marker([-27.2206781,-49.6535601], {icon})
.addTo(map)
.bindPopup(popup)