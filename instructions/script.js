let dots = [];
let dotsStay = [];
let lastX = 0;
let lastY = 0;
let useColor = true;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  colorMode(HSL);
}

function draw() {
  background(0, 0, 100, 0.3); // light transparent white
  colorMode(HSL)

  let c = useColor
    color(random(360), 90, 70)             

  if (mouseX === lastX && mouseY === lastY) {
    if (random() < 0.4) dots.shift();
  } else {
    lastX = mouseX;
    lastY = mouseY;
    dots.push({ x: mouseX, y: mouseY, color: c });
    dotsStay.push({ x: mouseX, y: mouseY, color: c });
  }

  if (dots.length > 60) dots.shift();

  const countDisplay = document.getElementById("pathCount");
  if (countDisplay) countDisplay.textContent = dotsStay.length;

  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    dot.color.setAlpha(i / 50);
    fill(dot.color);
    ellipse(dot.x, dot.y, 6, 6);
  }
}

setTimeout(() => {
  window.location.href = "../Garden/index.html"; 
}, 5000);