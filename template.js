let lat = example;
let lng = example;
let panorama;

 function initialize() {
    panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
     {
     position: { lat: lat, lng: lng},
     pov: { heading: 165, pitch: 0 },
      zoom: 1,
  },
);
}

window.initialize = initialize;


let mapOptions = {
  center:[45.79816953017265, 24.356689453125],
  zoom:3
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let lata = 1;
let lnga = 1;
let findist;

let marker = null;
map.on('click', (event)=> {

  if(marker !== null){
      map.removeLayer(marker);
  }

  marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

  document.getElementById('latitude').value = event.latlng.lat;
  document.getElementById('longitude').value = event.latlng.lng;
  lata = event.latlng.lat;
  lnga = event.latlng.lng;
})

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  findist = d;
  
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function fun() {
  getDistanceFromLatLonInKm(lat,lng,lata,lnga);
  document.getElementById("my_field").value = findist;
  console.log(findist);
}

var button = document.getElementById("my-button");
button.addEventListener("click", fun);
