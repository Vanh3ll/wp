const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

// Draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 150, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

// Draw a triangle
ctx.beginPath();
ctx.moveTo(450, 150);
ctx.lineTo(550, 50);
ctx.lineTo(650, 150);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();

// Animate a square
let squareX = 50;
const squareSpeed = 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw shapes
    ctx.fillStyle = 'red';
    ctx.fillRect(squareX, 50, 150, 100);

    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(450, 150);
    ctx.lineTo(550, 50);
    ctx.lineTo(650, 150);
    ctx.closePath();
    ctx.fillStyle = 'green';
    ctx.fill();

    squareX += squareSpeed;
    if (squareX + 150 > canvas.width || squareX < 0) {
        squareSpeed *= -1;
    }

    requestAnimationFrame(animate);
}

animate();
