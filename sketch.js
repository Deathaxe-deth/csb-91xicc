/* eslint-disable no-undef, no-unused-vars */

let stepNumber = 16;
let instNumber = 8;
let steps = new Array(stepNumber);

let player1 = new Tone.Player("media/Perc1.wav").toDestination();
let player2 = new Tone.Player("media/Perc2.wav").toDestination();
let player3 = new Tone.Player("media/Perc3.wav").toDestination();
let player4 = new Tone.Player("media/Perc4.wav").toDestination();
let player5 = new Tone.Player("media/Perc5.wav").toDestination();
let player6 = new Tone.Player("media/Perc6.wav").toDestination();
let player7 = new Tone.Player("media/Perc7.wav").toDestination();
let player8 = new Tone.Player("media/Perc8.wav").toDestination();
let player9 = new Tone.Player("media/Perc9.wav").toDestination();

let wizard1 = new Tone.Player("wizardmedia/Wizard1.mp3").toDestination();
let wizard2 = new Tone.Player("wizardmedia/Wizard2.mp3").toDestination();
let wizard3 = new Tone.Player("wizardmedia/Wizard3.mp3").toDestination();
let wizard4 = new Tone.Player("wizardmedia/Wizard4.mp3").toDestination();
let wizard5 = new Tone.Player("wizardmedia/Wizard5.mp3").toDestination();
let wizard6 = new Tone.Player("wizardmedia/Wizard6.mp3").toDestination();
let wizard7 = new Tone.Player("wizardmedia/Wizard7.mp3").toDestination();
let wizard8 = new Tone.Player("wizardmedia/Wizard8.mp3").toDestination();
let wizard9 = new Tone.Player("wizardmedia/Wizard9.mp3").toDestination();
let wizard10 = new Tone.Player("wizardmedia/Wizard10.mp3").toDestination();
let wizard11 = new Tone.Player("wizardmedia/Wizard11.mp3").toDestination();
let wizard12 = new Tone.Player("wizardmedia/Wizard12.mp3").toDestination();
let wizard13 = new Tone.Player("wizardmedia/Wizard13.mp3").toDestination();
let wizard14 = new Tone.Player("wizardmedia/Wizard14.mp3").toDestination();
let wizard15 = new Tone.Player("wizardmedia/Wizard15.mp3").toDestination();
let wizard16 = new Tone.Player("wizardmedia/Wizard16.mp3").toDestination();
let wizard17 = new Tone.Player("wizardmedia/Wizard17.mp3").toDestination();
let wizard18 = new Tone.Player("wizardmedia/Wizard18.mp3").toDestination();
let wizard19 = new Tone.Player("wizardmedia/Wizard19.mp3").toDestination();
let wizard20 = new Tone.Player("wizardmedia/Wizard20.mp3").toDestination();
let wizard21 = new Tone.Player("wizardmedia/Wizard21.mp3").toDestination();
let wizard22 = new Tone.Player("wizardmedia/Wizard22.mp3").toDestination();
let wizard23 = new Tone.Player("wizardmedia/Wizard23.mp3").toDestination();
let wizard24 = new Tone.Player("wizardmedia/Wizard24.mp3").toDestination();
let wizard25 = new Tone.Player("wizardmedia/Wizard25.mp3").toDestination();
let wizard26 = new Tone.Player("wizardmedia/Wizard26.mp3").toDestination();
let wizard27 = new Tone.Player("wizardmedia/Wizard27.mp3").toDestination();
let wizard28 = new Tone.Player("wizardmedia/Wizard28.mp3").toDestination();
let wizard29 = new Tone.Player("wizardmedia/Wizard29.mp3").toDestination();
let wizard30 = new Tone.Player("wizardmedia/Wizard30.mp3").toDestination();
let wizard31 = new Tone.Player("wizardmedia/Wizard31.mp3").toDestination();
let wizard32 = new Tone.Player("wizardmedia/Wizard32.mp3").toDestination();

//wizard1.autostart = true;

let note1 = new Tone.Player("synth/notes-001.mp3").toDestination();
let note2 = new Tone.Player("synth/notes-002.mp3").toDestination();
let note3 = new Tone.Player("synth/notes-003.mp3").toDestination();
let note4 = new Tone.Player("synth/notes-004.mp3").toDestination();
let note5 = new Tone.Player("synth/notes-005.mp3").toDestination();
let note6 = new Tone.Player("synth/notes-006.mp3").toDestination();
let note7 = new Tone.Player("synth/notes-007.mp3").toDestination();
let note8 = new Tone.Player("synth/notes-008.mp3").toDestination();

for (let i = 0; i < steps.length; i++) {
  steps[i] = new Array(instNumber);
}
//play
let step = 0;

let seq = new Tone.Loop(() => {
  background("Green");
  step++;

  if (step === 16) {
    step = 0;
  }
  rect(step * 19, 20, 20, 135, 10);

  if (steps[step][0].checked()) {
    console.log("first step");
    //kick start
    note8.start();
  }

  if (steps[step][1].checked()) {
    console.log("second step");
    //inst 2
    note7.start();
  }
  if (steps[step][2].checked()) {
    console.log("step3");
    note6.start();
  }
  if (steps[step][3].checked()) {
    console.log("step4");
    note5.start();
  }
  if (steps[step][4].checked()) {
    console.log("step5");
    note4.start();
  }
  if (steps[step][5].checked()) {
    console.log("step6");
    note3.start();
  }
  if (steps[step][6].checked()) {
    console.log("step7");
    note2.start();
  }
  if (steps[step][7].checked()) {
    console.log("step8");
    note1.start();
  }
}, "8n").start();

Tone.Transport.start();

//
//
//SETUP SETUP SETUP SETUP
//
//

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
  let wizardPicker = random([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ]);
  if (wizardPicker === 0) {
    //wizard1.start();
    wizard1.autostart = true;
  } else if (wizardPicker === 1) {
    //wizard2.start();
    wizard2.autostart = true;
  } else if (wizardPicker === 2) {
    //wizard3.start();
    wizard3.autostart = true;
  } else if (wizardPicker === 3) {
    //wizard4.start();
    wizard4.autostart = true;
  } else if (wizardPicker === 4) {
    //wizard5.start();
    wizard5.autostart = true;
  } else if (wizardPicker === 5) {
    //wizard6.start();
    wizard6.autostart = true;
  } else if (wizardPicker === 6) {
    //wizard7.start();
    wizard7.autostart = true;
  } else if (wizardPicker === 7) {
    //wizard8.start();
    wizard8.autostart = true;
  } else if (wizardPicker === 8) {
    //wizard9.start();
    wizard9.autostart = true;
  } else if (wizardPicker === 9) {
    //wizard10.start();
    wizard10.autostart = true;
  } else if (wizardPicker === 10) {
    //wizard10.start();
    wizard11.autostart = true;
  } else if (wizardPicker === 11) {
    //wizard10.start();
    wizard12.autostart = true;
  } else if (wizardPicker === 12) {
    //wizard10.start();
    wizard13.autostart = true;
  } else if (wizardPicker === 13) {
    //wizard10.start();
    wizard14.autostart = true;
  } else if (wizardPicker === 14) {
    //wizard10.start();
    wizard15.autostart = true;
  } else if (wizardPicker === 15) {
    //wizard10.start();
    wizard16.autostart = true;
  } else if (wizardPicker === 16) {
    //wizard10.start();
    wizard17.autostart = true;
  } else if (wizardPicker === 17) {
    //wizard10.start();
    wizard18.autostart = true;
  } else if (wizardPicker === 18) {
    //wizard10.start();
    wizard19.autostart = true;
  } else if (wizardPicker === 19) {
    //wizard10.start();
    wizard20.autostart = true;
  } else if (wizardPicker === 20) {
    //wizard10.start();
    wizard21.autostart = true;
  } else if (wizardPicker === 21) {
    //wizard10.start();
    wizard22.autostart = true;
  } else if (wizardPicker === 22) {
    //wizard10.start();
    wizard23.autostart = true;
  } else if (wizardPicker === 23) {
    //wizard10.start();
    wizard24.autostart = true;
  } else if (wizardPicker === 24) {
    //wizard10.start();
    wizard25.autostart = true;
  } else if (wizardPicker === 25) {
    //wizard10.start();
    wizard26.autostart = true;
  } else if (wizardPicker === 26) {
    //wizard10.start();
    wizard27.autostart = true;
  } else if (wizardPicker === 27) {
    //wizard10.start();
    wizard28.autostart = true;
  } else if (wizardPicker === 28) {
    //wizard10.start();
    wizard29.autostart = true;
  } else if (wizardPicker === 29) {
    //wizard10.start();
    wizard30.autostart = true;
  } else if (wizardPicker === 30) {
    //wizard10.start();
    wizard31.autostart = true;
  } else if (wizardPicker === 31) {
    //wizard10.start();
    wizard32.autostart = true;
  }

  let seqdiv1 = createDiv();

  for (let i = 0; i < stepNumber; i++) {
    for (let j = 0; j < instNumber; j++) {
      steps[i][j] = createCheckbox();
      steps[i][j].parent(seqdiv1);
      steps[i][j].position(i * 19, j * 15);
    }
  }
  console.log(seqdiv1);
  seqdiv1.position(width === 0, 20);
  console.log(steps);

  stopbutton = createButton("Cancel");
  stopbutton.position(width / 2, height / 2 - 40);
  stopbutton.mousePressed(() => {
    seq.stop();
    step = 0;
  });

  playbutton = createButton("Play");
  playbutton.position(width / 2 - 40, height / 2 - 40);
  playbutton.mousePressed(() => seq.start());

  button1 = createButton("'A'");
  button1.position(width / 2 - 200, height / 2);
  button1.mousePressed(() => player1.start());
  button2 = createButton("'S'");
  button2.position(width / 2 - 150, height / 2);
  button2.mousePressed(() => player2.start());
  button3 = createButton("'D'");
  button3.position(width / 2 - 100, height / 2);
  button3.mousePressed(() => player3.start());
  button4 = createButton("'F'");
  button4.position(width / 2 - 50, height / 2);
  button4.mousePressed(() => player4.start());
  button5 = createButton("'G'");
  button5.position(width / 2, height / 2);
  button5.mousePressed(() => player5.start());
  button6 = createButton("'H'");
  button6.position(width / 2 + 50, height / 2);
  button6.mousePressed(() => player6.start());
  button7 = createButton("'J'");
  button7.position(width / 2 + 100, height / 2);
  button7.mousePressed(() => player7.start());
  button8 = createButton("'K'");
  button8.position(width / 2 + 150, height / 2);
  button8.mousePressed(() => player8.start());
  button9 = createButton("'L'");
  button9.position(width / 2 + 200, height / 2);
  button9.mousePressed(() => player9.start());
}

function draw() {
  // Put drawings here
  //background("Green");
  //wizard.start();

  textFont("Helvetica");
  textSize(20);
  text("Refresh/Pressing A Recommended", width / 2 - 150, height / 2 - 50);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
function keyPressed() {
  console.log(key);

  if (key === "a") {
    player1.start();
  } else if (key === "s") {
    player2.start();
  } else if (key === "d") {
    player3.start();
  } else if (key === "f") {
    player4.start();
  } else if (key === "g") {
    player5.start();
  } else if (key === "h") {
    player6.start();
  } else if (key === "j") {
    player7.start();
  } else if (key === "k") {
    player8.start();
  } else if (key === "l") {
    player9.start();
  }
}
