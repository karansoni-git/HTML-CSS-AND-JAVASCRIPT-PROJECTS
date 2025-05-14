let allImages = document.querySelectorAll("img");
let cuurenImage = document.querySelector(".current_image");
let cuurenImageSrc = document.querySelector(".current_image img");
let closeImage = document.querySelector(".close img");
for (let img of allImages) {
  img.addEventListener("click", () => {
    cuurenImageSrc.src = img.src;
    cuurenImage.style.display = "flex";
  });
}

closeImage.addEventListener("click", () => {
  cuurenImage.style.display = "none";
});
