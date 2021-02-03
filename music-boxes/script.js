let boxes = document.querySelectorAll(".box")
let audio = document.querySelectorAll('audio');

boxes.forEach((box, index) => {
  box.addEventListener('mousedown', () => {
    audio[index].currentTime = 0;
    audio[index].play();
  });
});