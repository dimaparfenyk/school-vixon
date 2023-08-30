import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const header = document.querySelector('.header');

var lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 1,
  maxZoom: 2,
  animationSpeed: 300,
});

lightbox.on('show.simplelightbox', function () {
  header.style.zIndex = 999;
});

lightbox.on('closed.simplelightbox', function () {
  header.style.zIndex = 10000;
});
