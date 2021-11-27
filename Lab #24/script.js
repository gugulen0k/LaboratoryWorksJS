let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// background
ctx.beginPath();
ctx.fillStyle = "Green";
ctx.rect(0, 0, 500, 500);
ctx.fill();
ctx.closePath();

// smiley face
ctx.beginPath();
ctx.fillStyle = "Yellow";
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// eyes
ctx.beginPath();
ctx.fillStyle = "Black";
ctx.arc(185, 200, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "Black";
ctx.arc(315, 200, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// mouth
ctx.beginPath();
ctx.arc(250, 250, 100, 0, Math.PI, false);
ctx.strokeStyle = "Black";
ctx.stroke();
ctx.closePath();

