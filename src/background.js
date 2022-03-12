const images = ["src/img/0.jpg", "src/img/1.jpg", "src/img/2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;

console.log(document.body.style);
