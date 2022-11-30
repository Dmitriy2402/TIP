const image = document.querySelector('.image');
image.addEventListener('mouseover', () => {
  image.style.transform ='scale(1)';
});

image.addEventListener('mouseout', () => {
  image.style.transform ='scale(3)';
});

