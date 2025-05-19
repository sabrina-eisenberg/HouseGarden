const numBees = 15;
const bees = [];
const beeSize = 30;
const avoidDistance = 30; // Minimum distance to avoid

const container = document.getElementById("beeContainer");

for (let i = 0; i < numBees; i++) {
  const bee = document.createElement("img");
  bee.src = "bee!.png"; // Your image path
  bee.className = "bee";
  container.appendChild(bee);

  const startX = Math.random() * (window.innerWidth - beeSize);
  const startY = Math.random() * (window.innerHeight - beeSize);

  bee.style.left = `${startX}px`;
  bee.style.top = `${startY}px`;

  bees.push({
    el: bee,
    x: startX,
    y: startY,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
  });
}

function animate() {
  bees.forEach((bee, i) => {
    // Basic collision avoidance
    for (let j = 0; j < bees.length; j++) {
      if (i === j) continue;
      let other = bees[j];
      let dx = bee.x - other.x;
      let dy = bee.y - other.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < avoidDistance && dist > 0) {
        // Push away from the other bee
        bee.vx += dx / dist * 0.05;
        bee.vy += dy / dist * 0.05;
      }
    }

    // Move the bee
    bee.x += bee.vx;
    bee.y += bee.vy;

    // Bounce off edges
    if (bee.x <= 0 || bee.x >= window.innerWidth - beeSize) bee.vx *= -1;
    if (bee.y <= 0 || bee.y >= window.innerHeight - beeSize) bee.vy *= -1;

    // Update position
    bee.el.style.left = `${bee.x}px`;
    bee.el.style.top = `${bee.y}px`;
  });

  requestAnimationFrame(animate);
}

animate();


setTimeout(() => {
  window.location.href = "../Garden/index.html"; 
}, 5000);