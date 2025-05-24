let text = document.querySelector(".txt_Container");
let kybd = document.querySelector(".keyboard");
let body = document.querySelector("body");

text.addEventListener("click", () => {
  kybd.classList.remove("hide_kybd");
});

let Enter = document.querySelector(".enter");
let Delete = document.querySelector(".delete");
let Space = document.querySelector(".space");
let CapsLock = document.querySelector(".capslock");

Enter.addEventListener("click", () => {
  let txt_Text = text.innerText;
  text.innerText = txt_Text + "\n";
});

Space.addEventListener("click", () => {
  let txt_Text = text.innerText;
  text.innerText = txt_Text + " ";
  console.log(text.innerText);
});

Delete.addEventListener("click", () => {
  let txt_Text = text.innerText;
  text.innerText = txt_Text.slice(0, txt_Text.length - 1);
  console.log(text.innerText);
  if (txt_Text.length == 0) {
    alert("NO MORE TEXT AVAILABLE");
  }
});

let iscaps = false;
let allkeys = document.querySelectorAll(".key");

CapsLock.addEventListener("click", () => {
  if (iscaps) {
    CapsLock.classList.remove("active");
    for (let key of allkeys) {
      if (key.classList.length > 1) {
        // this is a special keys like capslock , enter , delete so we dont want
        // to uppercase it.
      } else {
        key.innerText = key.innerText.toLowerCase();
      }
    }
  } else {
    CapsLock.classList.add("active");
    for (let key of allkeys) {
      if (key.classList.length > 1) {
        // this is a special keys like capslock , enter , delete so we dont want
        // to uppercase it.
      } else {
        key.innerText = key.innerText.toUpperCase();
      }
    }
  }
  iscaps = !iscaps;
});

for (let key of allkeys) {
  key.addEventListener("click", () => {
    if (key.classList.length > 1) {
      //this is for not printing the special key text into text area.
    } else {
      let txt_Text = text.innerText;
      text.innerText = txt_Text + key.innerText;
    }
  });
}
