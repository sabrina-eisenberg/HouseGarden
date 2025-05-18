const flower = document.getElementById('flower');
const numPetals = Math.random()*12;
let petalCount = Math.random()*12;

// function randomColor() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function createPetals() {
//   for (let i = 0; i < numPetals; i++) {
//     const petal = document.createElement('div');
//     petal.classList.add('petal');
//     const angle = (360 / numPetals) * i;
//     petal.style.transform = `rotate(${angle}deg) translateY(-50%)`;
//     flower.appendChild(petal);

//     petal.addEventListener('mouseenter', () => {
//       const scale = (Math.random() * 0.5 + 0.75).toFixed(2);
//       const rotation = Math.floor(Math.random() * 360);
//       const newWidth = Math.floor(Math.random() * 40 + 30);
//       const newHeight = Math.floor(Math.random() * 60 + 60);

//       const r1 = Math.floor(Math.random() * 100);
//       const r2 = Math.floor(Math.random() * 100);
//       const r3 = Math.floor(Math.random() * 100);
//       const r4 = Math.floor(Math.random() * 100);

//       petal.style.width = `${newWidth}px`;
//       petal.style.height = `${newHeight}px`;
//       petal.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}%`;
//       petal.style.backgroundColor = randomColor();
//       // petal.style.transform = `rotate(${angle + rotation}deg) scale(${scale}) translateY(-50%)`;

//     });


//     petal.addEventListener('mouseleave', () => {
//       petal.style.transform = `rotate(${angle}deg) translateY(-50%)`;
//     });
//   }
// }

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
}

function randomPetalStyle() {
  return {
    width: `${Math.random() * 10 + 30}px`,
    height: `${Math.random() * 10 + 60}px`,
    backgroundColor: randomColor()
  };
}

function createPetal(angle, baseColor) {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Initial style
  const { width, height, borderRadius } = randomPetalStyle();
  petal.style.backgroundColor = baseColor;
  petal.style.borderRadius = borderRadius;
  petal.style.transform = `rotate(${angle}deg) translateY(-60%)`;
  petal.style.width = "30px";
  petal.style.height = "60px";

  petal.addEventListener('mouseenter', () => {
    const style = randomPetalStyle();
    petal.style.width = style.width;
    petal.style.height = style.height;
    petal.style.backgroundColor = randomColor(); // petals can still change color on hover
    petal.style.borderRadius = style.borderRadius;
  });

  return petal;
}


function createFlower(petalCount = numPetals) {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  const baseColor = randomColor(); // One random color for all petals

  for (let i = 0; i < petalCount; i++) {
    const angle = (360 / petalCount) * i;
    flower.appendChild(createPetal(angle, baseColor));
  }

  const center = document.createElement('div');
  center.classList.add('center');
  flower.appendChild(center);

  return flower;
}

function drawFlower(x, y) {
  const newFlower = createFlower(8); // Create a new flower
  newFlower.style.position = 'absolute'; // Make it position absolutely
  newFlower.style.left = `${x - 15}px`; // Center flower on click
  newFlower.style.top = `${y - 60}px`; // Center flower on click
  flowerArea.appendChild(newFlower); // Append it to the flower container

  // Create and position click circle
  const marker = document.createElement('div');
  marker.classList.add('click-marker');
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
  flowerArea.appendChild(marker);
}

// Event listener for adding flowers when clicking on the screen
const flowerArea = document.getElementById('flower-area');

// Function to create and append a new flower at the clicked position
document.addEventListener('click', (event) => {
  drawFlower(event.x, event.y);
});

drawFlower(window.innerWidth / 2, window.innerHeight / 2);
