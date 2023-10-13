import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryItems.forEach((item) => {
    const liItem = document.createElement("li");
    liItem.innerHTML = `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />`
    galleryList.append(liItem);
});

const imageLinks = document.querySelectorAll('.gallery__link');
imageLinks.forEach((imageLink) => {
    imageLink.addEventListener('click', function (event) {
        event.preventDefault(); // Скасовуємо стандартну дію посилання
    
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`)
    instance.show()
    });
})
//console.log(galleryItems);
