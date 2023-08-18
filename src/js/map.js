function myMap() {
  var myCenter = new google.maps.LatLng(50.459003, 30.75082);
  var mapCanvas = document.getElementById('googleMap');
  var mapOptions = { center: myCenter, zoom: 10 };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE,
  });
  marker.setMap(map);
}
