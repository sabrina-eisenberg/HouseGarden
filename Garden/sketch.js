let bee;

function preload() {
  bee = [
    loadSound("sounds/bee.m4a"),
    loadSound("sounds/bee2.m4a"),
    loadSound("sounds/bee3.m4a"),
    loadSound("sounds/bee4.m4a"),
  ]
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  lastX = mouseX;
  lastY = mouseY;
}

let lastX = 0;
let lastY = 0;
function draw() {
  if (mouseX == lastX && mouseY == lastY) {
  } else {
    lastX = mouseX;
    lastY = mouseY;
    colorMode("hsl")
    strokeWeight(0);
    let c = color(Math.round(Math.random() * 360), 90, 70);
    fill(c);
    rect(mouseX, mouseY, 8, 2);
  }
}



addEventListener("click", (event) => {
  index = Math.floor(Math.random() * bee.length)
  // console.log(index)
  bee[index].play()
})