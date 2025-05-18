let curreval = 0;
let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");
let pages = document.querySelectorAll(".pg_No");
nextbtn.addEventListener("click", () => {
  if (curreval == pages.length - 1) {
    return;
  } else {
    pages[curreval].classList.remove("active");
    pages[++curreval].classList.add("active");
  }
});
prevbtn.addEventListener("click", () => {
  if (curreval == 0) {
    return;
  } else {
    pages[curreval--].classList.remove("active");
    pages[curreval].classList.add("active");
  }
});
for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", () => {
    if (i == curreval) {
      return;
    }
    pages[curreval].classList.remove("active");
    pages[i].classList.add("active");
    curreval = i;
  });
}
