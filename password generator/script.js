const outputVal = document.querySelector("#clipboardText");
const copyBtn = document.querySelector("#clipboardBtn");
const pswLng = document.querySelector("#pswLng");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generatePsw");

const randomFun = {
  upper: randomUppercase,
  lower: randomLowercase,
  numbers: randomNumbers,
  symbols: randomSymbols,
};

let generatedPassword = "";
let finalPassword;

function generatePassword(length, upper, lower, numbers, symbols) {
  let checkedCount = upper + lower + numbers + symbols;
  let countArray = [{ upper }, { lower }, { numbers }, { symbols }].filter(
    (item) => {
      return Object.values(item)[0];
    }
  );

  if (checkedCount == 0) {
    return "";
  }

  for (let i = 0; i < length; i++) {
    countArray.forEach((type) => {
      let keyRandomFun = Object.keys(type)[0];
      generatedPassword += randomFun[keyRandomFun]();
      console.log(generatedPassword);
    });
  }
  finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

copyBtn.addEventListener("click", () => {
  if (finalPassword === undefined) {
    //do nothing
  } else {
    navigator.clipboard
      .writeText(finalPassword)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
});

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function randomSymbols() {
  const symbols = "~!@#$%^&*(){}[]_+-<>,./?|";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
