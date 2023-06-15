// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const makeGalleryCard = galleryItems.map(
  galleryItems =>
    `

<li class="gallery__item">
   <a class="gallery__link" href=${galleryItems.original}>
      <img class="gallery__image" src=${galleryItems.preview} alt=${galleryItems.description} />
   </a>
</li>`
);
gallery.style.listStyle = 'none';
gallery.insertAdjacentHTML('beforeend', makeGalleryCard.join(''));

gallery.addEventListener('click', onClick);

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

function onClick(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
