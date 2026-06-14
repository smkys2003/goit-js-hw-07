function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanNewColor = document.querySelector('.color');
const bodyEl = document.body;

btnChangeColor.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  const newRandomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newRandomColor;
  spanNewColor.textContent = newRandomColor;
}
