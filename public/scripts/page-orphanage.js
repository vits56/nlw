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

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
   
    function removeActiveClass(button) {
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atuali ar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botao

    button.classList.add('active')

}
   


