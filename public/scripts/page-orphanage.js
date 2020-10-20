const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    ZoomControl: false

}

// creat map

const map = L.map('mapid', options).setView([-27.2206781,-49.6535601], 15);


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


// creat and add maker

L
.marker([-27.2206781,-49.6535601], {icon})
.addTo(map)


/* Image gallery */

function selectImage() {
    
}