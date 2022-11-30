const menu = document.querySelector('.menu');//первый элемент документа селектора меню

menu.addEventListener('mouseover', (event) => { 
  const listItem = event.target.closest('.list__item');

  if (!listItem) {
    return;
  }
  changeStyle(listItem);
});

menu.addEventListener('mouseout', (event) => {
  const listItem = event.target.closest('.list__item');

  if (!listItem) 
  {
    return;
  }
  changeStyle(listItem);
});

function changeStyle(listItem) {
  listItem.classList.toggle('list__item--over');
  listItem.classList.toggle('list__item--out');
}

