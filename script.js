mapboxgl.accessToken = 'pk.eyJ1IjoidWRlbml6a2l6aWxjaSIsImEiOiJjbGZianl6MDIzMTFvM3hyMDJtbWh3eDV6In0.30C3ClSUGYeHFl43QL02wg'

navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {enableHighAccuracy: true})  // Uygulama çalıştırılmaya başlandığında kullanıcının anlık konumunu göstermektedir.

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation(){
    setupMap([39.88994,32.65337]) // Okulun koordinatları
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:25
      });

const nav = new mapboxgl.NavigationControl(); // Zoom in ve Zoom out paneli
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

map.addControl(directions,"top-left")
}
