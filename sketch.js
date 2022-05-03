let ctracker;
let inconsolata,inconsolata2,inconsolata3,inconsolata4;
let value
let angle = 0 
let n = 0
let c
let x = 0.1
let badWords = ['Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche','Hate','Dame','Fxxk','racist','Crazy','Racism','Negtive','Poop','Douche']
let goodWords = ['Love','Pretty','Cute','Lucky','Happy','Great','Smart','Love','Cute','Lucky','Happy','Great','Smart','Love','Cute','Lucky','Happy','Great','Love','Cute','Lucky','Happy','Great','Love','Pretty','Cute','Lucky','Hopeful','Happy','Great','Love','Cute','Lucky','Happy','Great','Love','Pretty','Cute','Lucky','Happy','Great','Happy','Great','Love','Pretty','Cute','Lucky','Happy','Great','Happy','Great','Love','Pretty','Cute','Lucky','Happy','Great','Happy','Great','Love','Pretty','Cute','Lucky','Happy','Great']
function preload() {
  inconsolata = loadFont('fonts/PermanentMarker-Regular.ttf');
  inconsolata2 = loadFont('fonts/Creepster-Regular.ttf');
  inconsolata3 = loadFont('fonts/Lobster-Regular.ttf');
  inconsolata4 = loadFont('fonts/RubikWetPaint-Regular.ttf');
  inconsolata5 = loadFont('fonts/OleoScriptSwashCaps-Bold.ttf');
  inconsolata6 = loadFont('fonts/Dog-Rough-2.otf');
  inconsolata7 = loadFont('fonts/psychobutcher-1.ttf');
  inconsolata8 = loadFont('fonts/eternalflame-1.ttf');
  inconsolata9 = loadFont('fonts/CharlieKaydenDemoRegular-2.ttf');
}

function setup() {
  // Enable camera, allow the browser to open the camera
  let videoInput = createCapture(VIDEO);
  videoInput.size(windowWidth, windowHeight);
  videoInput.position(0, 0);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES)
  // let lang = navigator.language || 'en-US';
  // let speechRec = new p5.speechRec(lang, gotSpeech);

  // speechRec.start();
  //videoInput.hide();

  // Create our canvas and assign it to a local variable
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  // Create a local tracker
  ctracker = new clm.tracker();
  // The model model file has been linked in the html file
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
}

function draw() {
  // empty canvas
  clear();
  angle = angle + 0.1;
  n = sin(angle)
  let size = map (noise(x),0,1,15,30)
  x+=0.01
  console.log(size)

  fill('black');
	rect(0, 0, width, height);

  // Get an array of facial recognition point locations [x,y]
  let positions = ctracker.getCurrentPosition();

  for (let i = 0; i < positions.length; i++) {
   
    fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // fill(0)
    // Turn each location information into text
    text(goodWords[i],positions[i][0], positions[i][1]);
    textFont(inconsolata3)
    textSize(size)
 
  }
    if (mouseIsPressed === true) {
      
      fill('white');
      rect(0, 0, width, height);
      let positions = ctracker.getCurrentPosition();
      for (let i = 0; i <positions.length; i++) {   
  
    fill(10,100,100,100)
    text(badWords[i],positions[i][0], positions[i][1]);
    textFont(inconsolata6)
    textSize(size)
  
    }
  }
}