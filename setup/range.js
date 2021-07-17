const ranges = document.querySelector(".ranges");
const range = document.querySelectorAll(".range");
const color = document.querySelector(".color");
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");

ranges.addEventListener("change", () => {
  let color1 = redBtn.value;
  let color2 = greenBtn.value;
  let color3 = blueBtn.value;
  let colorString = `rgb(${color1}, ${color2}, ${color3})`;
  document.body.style.background = colorString;
  color.textContent = colorString;
});

// let inputValue;

// console.log(inputValue);

// function getInputRgb() {
//     range.forEach((item) => {
//     item.addEventListener("change", (e) => {
//         let clicked = e.target;

//         inputValue = clicked.value;
//         console.log(inputValue);
//     });
//     // return inputValue;
// });
// }

// getInputRgb();

// function getColor() {
//     let color1 = inputValue;
//     let color2 = inputValue;
//     let color3 = inputValue;
//     let colorString = `rgb(${color1}, ${color2}, ${color3})`;
//     console.log(colorString);
//     document.body.style.background = colorString;
//     color.textContent = colorString;
// }

// getColor();

// range.forEach((item) => {
// ranges.addEventListener("change", (e) => {
//   // console.log(item.value);
//   // let clicked = e.target;

//   // inputValue = clicked.value;

//   let color1 = getInputRgb();
//   let color2 = getInputRgb();
//   let color3 = getInputRgb();

//   let colorString = `rgb(${color1}, ${color2}, ${color3})`;
//   document.body.style.background = colorString;
//   color.textContent = colorString;
// });
// });
