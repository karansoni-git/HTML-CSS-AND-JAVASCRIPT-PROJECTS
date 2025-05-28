let allImages = document.querySelectorAll("img");
let galleryContainer = document.querySelector(".gallery");
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

async function Images() {
  for (let i = 1; i <= 6; i++) {
    let response = await fetch("https://picsum.photos/1200/1080");
    let imgUrl = response.url;
    let Img = document.createElement("img");
    Img.src = imgUrl;
    galleryContainer.appendChild(Img);
    Img.addEventListener("click", () => {
      cuurenImageSrc.src = Img.src;
      cuurenImage.style.display = "flex";
    });
  }
}

Images();

window.addEventListener("scroll", (e) => {
  let { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;

  // console.log("clientHeight : " + clientHeight);
  // console.log("scrollHeight : " + scrollHeight);
  // console.log("scrollTop : " + scrollTop);
  //this formula work when clientHeight and scrollTop sum is >= scrollHeight.this will again call the Image() function and fetch new images.

  if (clientHeight + scrollTop + 1 >= scrollHeight) {
    Images();
  }
});
