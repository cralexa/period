
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RheW9mZm15bGF3biIsImEiOiJjazdjY3o4ZnAxM2J2M2xxcjFneDNjd3pvIn0.9PL4optZrptdmteBgGDu8Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [ -118.7797571, 34.0259216],
zoom:9
});

var markerCount = 0;
var marker;

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.on('click', function(e) {
  if (markerCount == 0) {
    marker = new mapboxgl.Marker({
    draggable: true
    })
    .setLngLat(e.lngLat)
    .addTo(map);
  } else {
    marker.remove();
    marker = new mapboxgl.Marker({
    draggable: true
    })
    .setLngLat(e.lngLat)
    .addTo(map);
  }

  markerCount = 1;

 SendMarker(marker.getLngLat());
});




function SendMarker(MyPoint) {
  const form = document.getElementById('MyMapForm');

      var input = document.getElementsByName("lat");
      input.value = MyPoint.lat;

      input = document.getElementsByName("lng");
      input.value = MyPoint.lng;

      //input = document.getElementsByName("submission");
      //input.value = new Date();

}
