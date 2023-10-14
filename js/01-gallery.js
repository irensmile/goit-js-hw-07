import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryList = document.querySelector(".gallery");

//let liItems = [];
//galleryItems.forEach((item) => {
//     const liItem = document.createElement("li");
//     liItem.innerHTML = `<a class="gallery__link" href=${item.original}>
//     <img
//       class="gallery__image"
//       src=${item.preview}
//       data-source=${item.original}
//       alt=${item.description}
//     />`
//     liItems.push(liItem);
//     //galleryList.append(liItem);
// });

const liItems = galleryItems.map((item) => {
    const liItem = document.createElement("li");
    liItem.classList.add('gallery__item');
    liItem.innerHTML = `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />`
    return liItem;
});

galleryList.append(...liItems);

// const imageLinks = document.querySelectorAll('.gallery__link');
// imageLinks.forEach((imageLink) => {
//      imageLink.addEventListener('click', function (event) {
// //         event.preventDefault(); // Скасовуємо стандартну дію посилання
    
//         const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`)
//         instance.show()
//     });
// })

galleryList.addEventListener('click', function (event) {
    event.preventDefault(); // Скасовуємо стандартну дію посилання
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`)
    instance.show()
}); //підписуємся на подію click для батьківського елементу ul замість "а"шок

//console.log(galleryItems);
