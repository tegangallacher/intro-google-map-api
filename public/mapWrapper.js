var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

var infowindow = new google.maps.InfoWindow( {
  content: "The Sherlock Holmes Museum is a privately run museum in London, England, dedicated to the famous fictional detective Sherlock Holmes. It opened in 1990 and is situated in Baker Street, bearing the number 221B by permission of the City of Westminster, although it lies between numbers 237 and 241, near the north end of Baker Street in central London close to Regent's Park."
})

MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker  = new google.maps.Marker( {
      animation: google.maps.Animation.DROP,
      position: coords,
      map: this.googleMap,
      draggable: true
    });
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var newLat = event.latLng.lat();
      var newLng = event.latLng.lng();
      var newCoords = {
        lat: newLat, 
        lng: newLng
      };
      this.addMarker(newCoords);
    }.bind(this));
  },
  addInfoMarker: function(coords) {
    var marker  = new google.maps.Marker( {
      animation: google.maps.Animation.DROP,
      position: coords,
      map: this.googleMap
    });
    marker.addListener("click", function() {
      infowindow.open(this.googleMap, marker);
    })
  }
}



