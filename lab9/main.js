const menuCities = document.querySelector('.menu-cities');
const itemCity = document.querySelectorAll('li');
const img = document.querySelectorAll('img');
const slider = document.querySelector('.slider');
let sliderWidth = img[0].clientWidth;
let count = 0;
menuCities.addEventListener('click', (event) => {
  let index = 0;
  const target = event.target.closest('li');
  if (!target) {
    return;
  }
  itemCity.forEach((el, i) => {
    el.classList.remove('active');
    if (el == target) {
      index = i;
    }
  });
  target.classList.add('active');
  if (index > count) {
    slider.style.transition = 'none';
    index--;
    slider.style.transform = `translateX(-${index * sliderWidth}px)`;
    setTimeout(function () {
      index++;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${(index) * sliderWidth}px)`;
      count = index;
    }, 0);
  }
  if (index < count) {
    slider.style.transition = 'none';
    index++;
    slider.style.transform = `translateX(-${index * sliderWidth}px)`;
    setTimeout(function () {
      index--;
      slider.style.transition = 'transform 0.3s ease-in-out';
      slider.style.transform = `translateX(-${(index) * sliderWidth}px)`;
      count = index;
    }, 0);
  }
});

slider.addEventListener('mouseover', (event) => {
  const target = event.target.closest('img');
  if (!target) {
    return;
  }
  target.style.transform = 'scale(1.5)';
});
slider.addEventListener('mouseout', (event) => {
  const target = event.target.closest('img');
  if (!target) {
    return;
  }
  target.style.transform = 'scale(1)';
});