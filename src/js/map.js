function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(50.433921, 30.511761),
    zoom: 11,
  };
  var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
}
