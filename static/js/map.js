
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RheW9mZm15bGF3biIsImEiOiJjazdjY3o4ZnAxM2J2M2xxcjFneDNjd3pvIn0.9PL4optZrptdmteBgGDu8Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [ -118.7797571, 34.0259216],
zoom:9
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
