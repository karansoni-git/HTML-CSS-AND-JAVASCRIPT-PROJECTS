//same result in sort code and efficient.
let buttons = document.querySelectorAll(".button");
console.log(buttons);
let body = document.querySelector("body");
let heading = document.querySelector("#heading");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
    if (e.target.id === "yellow") {
      heading.style.color = "black";
    } else {
      heading.style.color = "#FFF1D5";
    }
  });
});

//same output but long code

// let red = document.querySelector("#red");
// let yellow = document.querySelector("#yellow");
// let blue = document.querySelector("#blue");
// let green = document.querySelector("#green");
// let body = document.querySelector("body");
// let heading = document.querySelector("#heading");
// red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
//   heading.style.color = " #FFF1D5";
// });

// yellow.addEventListener("click", () => {
//   body.style.backgroundColor = "yellow";
//   heading.style.color = "black";
// });

// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
//   heading.style.color = " #FFF1D5";
// });

// green.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
//   heading.style.color = " #FFF1D5";
// });
