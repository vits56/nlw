const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeigth: 240
}).setContent('Lar das meninas <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`')

L
.marker([-27.222633, -49.6455874], { icon })
.addTo(map)
.bindPopup(popup)