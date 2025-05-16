let bee;

function preload() {
  bee = [
    loadSound("sounds/bee.m4a"),
    loadSound("sounds/bee2.m4a"),
    loadSound("sounds/bee3.m4a"),
    loadSound("sounds/bee4.m4a"),
  ]
}

let poses = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // background(150);
  // lastX = mouseX;
  // lastY = mouseY;
}

// let lastX = 0;
// let lastY = 0;
function draw() {
    background("rgba(255, 255, 255, 0.32)")
    // background(image(/images/green.jpg))
  // if (mouseX == lastX && mouseY == lastY) {
  //   } else {
  //     lastX = mouseX;
  //     lastY = mouseY;
      colorMode("hsl")
      strokeWeight(0);
      let c = color(Math.round(Math.random() * 360), 90, 70);
      fill(c,  64);
      ellipse(mouseX, mouseY, 10, 10);
      poses.push({x : mouseX, y : mouseY, color : c});
      if(poses.length> 60) poses.shift();
      for(let p = 0; p < poses.length; p++) {
        // 
        let pos = poses[p];
        pos.color.setAlpha(p / 50)
        fill(pos.color)
        ellipse(pos.x, pos.y, 6, 6)
  }
}



addEventListener("click", (event) => {
  index = Math.floor(Math.random() * bee.length)
  // console.log(index)
  bee[index].play()
})