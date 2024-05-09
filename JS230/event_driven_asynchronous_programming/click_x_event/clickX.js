document.addEventListener('DOMContentLoaded', () => {
  
  let x = document.querySelector('.x');

  document.addEventListener('mousemove', event => {
    let posX = event.clientX;
    let posY = event.clientY;

    x.style.top = String(posY) + "px";
    x.style.left = String(posX) + "px";

    console.log(posX, posY);
  });

  document.addEventListener('keydown', event => {
    let key = event.key;

    let x = document.querySelector('.x .horizontal');
    let y = document.querySelector('.x .vertical');
    let color;

    if (key === 'b') {
      color = 'blue';
    } else if (key === 'g') {
      color = 'green'
    } else if (key === 'r') {
      color = 'red'
    }

    x.style.background = color;
    y.style.background = color;
  });
});