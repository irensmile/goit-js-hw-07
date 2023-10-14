import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryList = document.querySelector(".gallery");

const liItems = galleryItems.map((item) => {
    const liItem = document.createElement("li");
    liItem.classList.add('gallery__item');
    liItem.innerHTML = `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />`
    return liItem;
});

galleryList.append(...liItems);

// const imageLinks = document.querySelectorAll('.gallery__link');
// imageLinks.forEach((imageLink) => {
//     imageLink.addEventListener('click', function (event) {
//         event.preventDefault(); // Скасовуємо стандартну дію посилання
//     });
// });


(function () {
    let gallery = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250
    })
})();

