let cart = [];

function firstLoad() {
  let getBagItems = localStorage.getItem("bagitems");
  cart = getBagItems ? JSON.parse(getBagItems) : [];
  displayItems();
  bagCount();
}
firstLoad();
function addToBag(itemId) {
  cart.push(itemId);
  localStorage.setItem("bagitems", JSON.stringify(cart));
  bagCount();
}

function bagCount() {
  let bagCountElement = document.querySelector(".bag-item-count");
  if (cart.length > 0) {
    bagCountElement.style.visibility = "visible";
    bagCountElement.innerText = cart.length;
  } else {
    bagCountElement.style.visibility = "hidden";
  }
}

function displayItems() {
  let mainContainer = document.querySelector(".main-items-container");

  if (!mainContainer) {
    return;
  }

  let content = "";
  Items.forEach((item) => {
    content += `  
    <div class="single-item-container">
    <img src="${item.itemImg}" alt="item image" class="item-image" />
    <div class="rating">${item.rating.stars}⭐ | ${item.rating.reviews}</div>
    <div class="brand-name">${item.brandName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="price-section">
    <span class="current-price">Rs ${item.prices.currentPrice}</span
    ><span class="original-price">Rs ${item.prices.originalPrice}</span
    ><span class="discount">(${item.prices.discount}% OFF)</span>
    </div>
    <button type="button" class="add-bag-btn" onclick={addToBag(${item.id})}>Add To Bag</button>
    </div>`;
  });
  mainContainer.innerHTML = content;
}
