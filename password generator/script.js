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

generateBtn.addEventListener("click", () => {
  const length = pswLng.value;
  const isUpperChk = uppercase.checked;
  const isLowerChk = lowercase.checked;
  const isNumbersChk = numbers.checked;
  const isSymbolsChk = symbols.checked;

  outputVal.value = generatePassword(
    length,
    isUpperChk,
    isLowerChk,
    isNumbersChk,
    isSymbolsChk
  );
});

function generatePassword(length, upper, lower, numbers, symbols) {
  let generatedPassword = "";
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
  const finalPassword = generatedPassword.slice(0, length);
  copyPassword(finalPassword);
  return finalPassword;
}

function copyPassword(copyPsw) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(copyPsw)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}

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
