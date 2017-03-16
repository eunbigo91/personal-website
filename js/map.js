// Google Maps API error
function googleMapsError() {
    alert("Failed to load data from Google. Try again later");
}


// Initialize the map
function initialize() {

    var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { saturation: -80 }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];


    var myLatlng = {lat: 47.608444, lng: -122.340549};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 13,
        styles: styleArray,
        zoomControl: false,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        draggable: false,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(myLatlng)
    });

    google.maps.event.addDomListener(window, 'load', initialize);
}
