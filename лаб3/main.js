function Funk1() {
  const aX = Number(document.querySelector('#Ax').value), 
    aY = Number(document.getElementById('Ay').value),
    bX = Number(document.getElementById('Bx').value),
    bY = Number(document.getElementById('By').value),
    cX = Number(document.getElementById('Cx').value),
    cY = Number(document.getElementById('Cy').value);
  document.getElementById('resultTask1').value = getSquare(aX, aY, bX, bY, cX, cY);
}

function getSquare(aX, aY, bX, bY, cX, cY) {
  return Math.abs(aX * (bY - cY) + bX * (cY - aY) + cX * (aY - bY)) / 2;
}

function Funk2() {
  const aX = Number(document.getElementById('Ax2').value),
    aY = Number(document.getElementById('Ay2').value);
  document.getElementById('resultTask2').value = getDistance(aX, aY);
}

function getDistance(aX, aY) {
  return Math.sqrt(Math.pow(aX, 2) + Math.pow(aY, 2));
}

function Funk3() {
  const param1 = document.getElementById('param1').value,
    param2 = document.getElementById('param2').value;
  getReverse(param1, param2);
}

function getReverse(param1, param2) {
  document.getElementById('param2').value=param1;
  document.getElementById('param1').value=param2;
}