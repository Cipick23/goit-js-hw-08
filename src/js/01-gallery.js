import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('div.gallery');

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
  return element
    .map(({ description, original, preview }) => {
    return`
    <a href="${original}" class="gallery__item">
      <img src="${preview}" alt="${description}" class="gallery__image"/>
    </a>`;
  })
  .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);

const galleryHandler = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

galleryHandler.on('show.simplelightbox');