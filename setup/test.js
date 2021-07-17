const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   let hexColor = "#";

//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }

//   color.textContent = hexColor;
//   document.body.style.background = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }

//my way

btn.addEventListener("click", () => {
  let color1 = getRandomRgb();
  let color2 = getRandomRgb();
  let color3 = getRandomRgb();

  let colorString = `rgb(${color1}, ${color2}, ${color3})`;
  console.log(colorString);
  document.body.style.background = colorString;
  color.textContent = colorString;
});

function getRandomRgb() {
  return Math.floor(Math.random() * 256);
}
