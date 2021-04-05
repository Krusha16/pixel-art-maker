let pixelCanvas = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid);
function makeGrid(event) {
  event.preventDefault();
  let inputHeight = document.getElementById('inputHeight').value;
  let inputWidth = document.getElementById('inputWidth').value;
  for (let i = 0; i < inputHeight; i++) {
    let row = pixelCanvas.insertRow(i);
    for (let j = 0; j < inputWidth; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', fillColor);
    }
  }
}
function fillColor() {
  this.style.backgroundColor = document.getElementById('colorPicker').value;
}
