function myMap() {
  const myCenter = new google.maps.LatLng(50.45433, 30.482873);
  const mapCanvas = document.getElementById('googleMap');
  const mapOptions = { center: myCenter, zoom: 10 };
  const map = new google.maps.Map(mapCanvas, mapOptions);
  const marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE,
  });
  marker.setMap(map);
}
