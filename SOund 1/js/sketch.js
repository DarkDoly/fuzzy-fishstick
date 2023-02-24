let button1, button2, button3, button4, sounds;
let dSlider, fSlider;

sounds = new Tone.Players({

  "muda": "sounds/muda.mp3",
  "timestop": "sounds/time-stops.mp3",
  "wryyyy": "sounds/wryyyy.mp3",
  "za warudo": "sounds/za-warudo.mp3"

})
const delay = new Tone.FeedbackDelay("8n", 0.5);


function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();
  
  button1 = createButton('MUDA MUDA MUDA!');
  button1.position(30, 50);
  button1.mousePressed(() => buttonSound("muda"));
  button2 = createButton('WRYYYY!');
  button2.position(30, 100);
  button2.mousePressed(() => buttonSound("wryyyy"));
  button3 = createButton('ZA WARUDO!');
  button3.position(30, 150);
  button3.mousePressed(() => buttonSound("za warudo"));
  button4 = createButton('*time stop noise*');
  button4.position(30, 200);
  button4.mousePressed(() => buttonSound("timestop"));

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
  delay.feedback.value = dSlider.value();
})
fSlider = createSlider(0., 1., 0.5, 0.05);
fSlider.mouseReleased( () => {
delay.feedback.value = fSlider.value();
})

}

function draw() {
  background(220);
}

function buttonSound(whichSound) {
  sounds.player(whichSound).start();
}