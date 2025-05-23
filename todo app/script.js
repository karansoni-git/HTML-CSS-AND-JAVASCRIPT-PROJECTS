let addBtn = document.querySelector("#btn");
let todoContainer = document.querySelector(".todo");
let todoItem = document.querySelector(".todoItem");
let isSelected = false;
let input = document.querySelector("#input");

addBtn.addEventListener("click", () => {
  let inputval = input.value;
  if (inputval === "") {
    console.log(inputval);
  } else {
    let s1 = document.createElement("div");
    let s2 = document.createElement("i");
    let s3 = document.createElement("h3");
    let s4 = document.createElement("button");
    s1.setAttribute("class", "todoItem");
    s1.append(s2, s3, s4);
    s2.setAttribute("class", "fa-regular fa-circle select");
    s3.innerText = inputval;
    s4.setAttribute("class", "deleteBtn");
    s4.innerText = "Delete";
    todoContainer.appendChild(s1);
    passData(s1);
  }
  input.value = "";
});

function passData(s1) {
  let Select = s1.children[0];
  Select.addEventListener("click", () => {
    if (isSelected) {
      Select.setAttribute("class", "fa-regular fa-circle select");
    } else {
      Select.setAttribute("class", "fa-solid fa-circle-check select");
    }
    isSelected = !isSelected;
  });

  let DeleteBtn = s1.children[2];
  DeleteBtn.addEventListener("click", () => {
    todoContainer.removeChild(s1);
  });
}
