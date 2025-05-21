let start = document.querySelector(".start");
let startBtn = document.querySelector("#stBtn");
let mainContainer = document.querySelector(".container");
let msg = document.querySelector(".winningMsg");
let okBtn = document.querySelector("#okBtn");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");

startBtn.addEventListener("click", () => {
  start.style.display = "none";
  mainContainer.style.display = "block";
  // msg.style.display = "none";
});

//main logic start
//first we decide which players turn
let playerX = true;
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      box.innerText = "X";
      playerX = false;
    } else {
      box.innerText = "O";
      playerX = true;
    }
    box.setAttribute("disabled", "disabled");
    checkWinner();
  });
});

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let winner of winningPattern) {
    let boxVal1 = boxes[winner[0]].innerText;
    let boxVal2 = boxes[winner[1]].innerText;
    let boxVal3 = boxes[winner[2]].innerText;
    if (boxVal1 != "" && boxVal2 != "" && boxVal3 != "") {
      if (boxVal1 === boxVal2 && boxVal2 === boxVal3) {
        let winner = document.querySelector("#winner");
        winner.innerText = boxVal1;
        mainContainer.style.display = "none";
        msg.style.display = "block";
      }
    }
  }
};
okBtn.addEventListener("click", () => {
  mainContainer.style.display = "block";
  msg.style.display = "none";
  boxes.forEach((box) => {
    box.removeAttribute("disabled");
    box.innerText = "";
    playerX = true;
  });
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.removeAttribute("disabled");
    box.innerText = "";
    playerX = true;
  });
});

newGame.addEventListener("click", () => {
  start.style.display = "block";
  mainContainer.style.display = "none";
  msg.style.display = "none";
  startBtn.style.marginLeft = "355px";
  boxes.forEach((box) => {
    box.removeAttribute("disabled");
    box.innerText = "";
    playerX = true;
  });
});
