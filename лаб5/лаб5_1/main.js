const imagesIndex = document.querySelectorAll('.images__index');//Все найденные элементы докмента,которые соответствуют указанному селектору
const imageItem = document.querySelectorAll('.image__item');
const imagePlace = document.querySelector('.image-place');

let img = document.createElement("img");// cоздание элемента html
let p = document.createElement("p");

img.style.width = '300px';

imagesIndex.forEach(el => 
  {
  el.addEventListener('change', () => //прикрепления обработчика событий к элементам
   {
    imagePlace.innerHTML = '';
    p.innerHTML = 'Место для картинки';
    p.className = 'image-place__discription';
    imagePlace.style.border = "";
    imagePlace.append(p);
  });
});

function move() {
  imagesIndex.forEach(el => {
    if (el.checked) {
      imagePlace.innerHTML = '';
      imagePlace.style.border = '2px solid red';
      img.src = imageItem[el.value - 1].src;
      imagePlace.append(img);//метод append для вставки изображения
    }
  });
}
document.querySelector('.images__button').addEventListener('click', move);
