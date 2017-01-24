

var initialize = function() {
  var centre = {lat: 51.5074, lng: -0.1278};
  var sherlock = {lat:51.523772, lng: -0.158538};
  var mapDiv  = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, centre, 10);

  mainMap.addMarker(centre);
  mainMap.addInfoMarker(sherlock); 
  mainMap.addClickEvent();

  var setMapCenter = function() {
    mainMap.googleMap.setCenter({lat: -50.607113, lng: 165.972561});
    mainMap.googleMap.setZoom(12);
  };

  var buttonClick = document.querySelector('#city-button');
  buttonClick.onclick = setMapCenter;

  var geoButtonClick = document.querySelector('#current-location');
  console.log(geoButtonClick);
  geoButtonClick.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log(pos);
    mainMap.googleMap.setCenter(pos);
    mainMap.googleMap.setZoom(15);
  })
};

};

window.onload = initialize;