const horizontalImgaes = ["src/img/0.jpg", "src/img/1.jpg", "src/img/2.jpg"];
const verticalImages = ["src/img/castle.jpg","src/img/eiffel_tower1.jpg","src/img/eiffel_tower2.jpg"];

const chosenHorizontalImage = horizontalImgaes[Math.floor(Math.random() * horizontalImgaes.length)];
const chosenVerticalImage = verticalImages[Math.floor(Math.random()* verticalImages.length)];

// if (window.innerWidth() <= 1500 && window.innerHeight() <= 3100){
//     document.body.style.backgroundImage = `url(${chosenVerticalImage})`;
// }
// else {
//     document.body.style.backgroundImage = `url(${chosenHorizontalImage})`;
// }


document.body.style.backgroundImage = `url(${chosenHorizontalImage})`;


console.log(document.body.style);
