

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

  var setToMistake = function() {
    mainMap.googleMap.setCenter({lat: 44.474802, lng: -67.534991});
    mainMap.googleMap.setZoom(15);
  };

  var mistakeClick = document.querySelector('#mistake-button');
  mistakeClick.onclick = setToMistake;

  var setToLonely = function() {
    mainMap.googleMap.setCenter({lat: 45.562828, lng: -81.465340});
    mainMap.googleMap.setZoom(12);
  };

  var lonelyClick = document.querySelector('#lonely-button');
  lonelyClick.onclick = setToLonely;

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

function flashtext(element,colour) {
  var colourCheck = document.getElementById(element).style.color;

    if (colourCheck === 'black') {
      document.getElementById(element).style.color = colour;
    } else {
      document.getElementById(element).style.color = 'black';
    }
  }

  setInterval(function() {
    flashtext("heading",'gold');
  }, 350 );

window.onload = initialize;