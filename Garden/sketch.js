let bee;

function preload() {
  bee = [
    loadSound("sounds/bee.m4a"),
    loadSound("sounds/bee2.m4a"),
    loadSound("sounds/bee3.m4a"),
    loadSound("sounds/bee4.m4a"),
  ]
}

let dots = [];

let dotsStay = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // background(150);
  // lastX = mouseX;
  // lastY = mouseY;
}

let lastX = 0;
let lastY = 0;
function draw() {
  background("rgba(255, 255, 255, 0.32)")
  colorMode("hsl")
  strokeWeight(0);
  let c = color(Math.round(Math.random() * 360), 90, 70);
  // background(image(/images/green.jpg))
  if (mouseX == lastX && mouseY == lastY) {
    // tracking when the mouse stops -- if the mouse stops
    if (Math.random() < 0.4) {
      dots.shift();
    }
  } else {
    // mouse is moving 
    lastX = mouseX;
    lastY = mouseY;
    dots.push({ x: mouseX, y: mouseY, color: c });
    dotsStay.push({ x: mouseX, y: mouseY, color: c });
  }
  if (dots.length > 60) dots.shift();


  if (dotsStay.length > 498 && !saving) {
    noLoop(); 
    saving = true; // prevents repeat triggers
    saveTrailAsImageAndRedirect();
  }

  document.getElementById("pathCount").innerHTML = 500 - dotsStay.length;

  // draw the trail 
  for (let p = 0; p < dots.length; p++) {
    let pos = dots[p];
    pos.color.setAlpha(p / 50)
    fill(pos.color)
    ellipse(pos.x, pos.y, 10, 10)

    // let pathButton = document.querySelector('#savePath')
    // pathButton.addEventListener("click", path(){
    // })
  }
}



addEventListener("click", (event) => {
  index = Math.floor(Math.random() * bee.length)
  // console.log(index)
  bee[index].play()
})


// addEventListener("click", (eventTwo) => {
// pathButton = document.querySelector('#savePath')
// onclick.pathButton(clear())
// })

let saving = false;

function saveTrailAsImageAndRedirect() {
  let pg = createGraphics(width, height);
  pg.colorMode(HSL);
  pg.noStroke();
  pg.background(255); // white background

  for (let p = 0; p < dotsStay.length; p++) {
    let pos = dotsStay[p];
    let col = pos.color;
    col.setAlpha(1);
    pg.fill(col);
    pg.ellipse(pos.x, pos.y, 10, 10);
  }

  save(pg, 'bee.trail.jpg');

  setTimeout(() => {
    document.location.href = "../";
  }, 1000); // 1 second delay
}
