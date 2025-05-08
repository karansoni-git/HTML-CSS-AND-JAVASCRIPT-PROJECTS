let form = document.querySelector("form");
let result = document.querySelector("#rs");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  if (weight === "" || weight <= 0 || isNaN(weight)) {
    alert("enter a valid weight");
  } else if (height === "" || height <= 0 || isNaN(height)) {
    alert("enter a valid height");
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerText = bmi;
  }
});
