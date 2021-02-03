let cNote = document.getElementById('cAudio')
let c = document.getElementById('c');

let dNote = document.getElementById('dAudio')
let d = document.getElementById('d');

let eNote = document.getElementById('eAudio')
let e = document.getElementById('e');

let fNote = document.getElementById('fAudio')
let f = document.getElementById('f');

let gNote = document.getElementById('gAudio')
let g = document.getElementById('g');

let aNote = document.getElementById('aAudio')
let a = document.getElementById('a');

let bNote = document.getElementById('bAudio')
let b = document.getElementById('b');

c.addEventListener("mousedown", () => {
  cNote.currentTime = 0;
  cNote.play();
});

d.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})

e.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})

f.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})

g.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})

a.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})

b.addEventListener("mousedown", () => {
  dNote.currentTime = 0;
  dNote.play();
})