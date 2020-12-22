const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/* const creatGalleryItem = image => {

    const itemRef = document.createElement('li');
    itemRef.classList.add('gallery__item');

    const imageRef = document.createElement('img');
    imageRef.classList.add('gallery__image');
    imageRef.src = image.url;
    imageRef.alt = image.alt;
    imageRef.width = 300;
    // imageRef.setAttribute('src', image.url);
    // imageRef.setAttribute('alt', image.alt);
    // imageRef.setAttribute('width', 200);

    itemRef.appendChild(imageRef);
    return itemRef;
}

const galleryItems = images.map(image => creatGalleryItem(image));

const galleryListRef = document.querySelector('#gallery');
galleryListRef.append(...galleryItems); */

const galleryListRef = document.querySelector('#gallery');

const galleryItems = images.map(image =>
  `<li class='gallery__item'>
  <img class='gallery__image' src=${image.url} alt='${image.alt}' width='300'>
  </li>`);

/* console.log(galleryItems);
console.log(galleryItems.join('')); */
  
galleryListRef.insertAdjacentHTML('afterbegin', galleryItems.join(''));