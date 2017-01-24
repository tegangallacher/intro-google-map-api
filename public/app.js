
var initialize = function() {
  var centre = {lat: 51.5074, lng: -0.1278};
  var sherlock = {lat:51.523772, lng: -0.158538};
  var mapDiv  = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, centre, 12);

  mainMap.addMarker(centre);
  mainMap.addInfoMarker(sherlock); 
  mainMap.addClickEvent();

  var setMapCenter = function() {
    mainMap.googleMap.setCenter({lat: -50.607113, lng: 165.972561});
  };

  var buttonClick = document.querySelector('#city-button');
  buttonClick.onclick = setMapCenter;

};

window.onload = initialize;