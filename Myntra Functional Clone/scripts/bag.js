let bagItemsObject;
let emptyMessageBox = document.querySelector(".emptyMessage");
onLoad();
function onLoad() {
  getItems();
  displayCartItems();
  displayBagTotal();
}

function getItems() {
  bagItemsObject = cart.map((item) => {
    for (let i = 0; i < Items.length; i++) {
      if (item == Items[i].id) {
        return Items[i];
      }
    }
  });
}

function displayCartItems() {
  let bagItemsContainer = document.querySelector(".bag-items-container");
  let content = "";

  bagItemsObject.forEach((cartItem) => {
    content += generateSingleItem(cartItem);
  });
  bagItemsContainer.innerHTML = content;
}

function displayBagTotal() {
  let bagTotalContainer = document.querySelector(".bag-summary");
  let bagItem = bagItemsObject.length;
  let allItemsTotalPrice = 0;
  let discount = 0;
  let finalTotal = 0;
  let ConvenienceFees = 0;

  bagItemsObject.forEach((item) => {
    allItemsTotalPrice += item.prices.originalPrice;
    discount += item.prices.originalPrice - item.prices.currentPrice;
  });

  if (bagItemsObject.length > 0) {
    ConvenienceFees = 99;
    finalTotal = allItemsTotalPrice - discount + ConvenienceFees;
  } else {
    ConvenienceFees = 0;
    finalTotal = allItemsTotalPrice - discount + ConvenienceFees;
  }

  bagTotalContainer.innerHTML = `
  <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItem} Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${allItemsTotalPrice}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-₹${discount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹${ConvenienceFees}</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹${finalTotal}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}

function removeItem(itemId) {
  cart = cart.filter((itemid) => {
    return itemid != itemId;
  });
  console.log(cart);
  localStorage.setItem("bagitems", JSON.stringify(cart));
  getItems();
  bagCount();
  displayBagTotal();
  displayCartItems();
}

function generateSingleItem(item) {
  return `
    <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.itemImg}" />
            </div>
            <div class="item-right-part">
              <div class="company">${item.brandName}</div>
              <div class="item-name">
                ${item.itemName}
              </div>
              <div class="price-container">
                <span class="current-price">Rs ${item.prices.currentPrice}</span>
                <span class="original-price">Rs ${item.prices.originalPrice}</span>
                <span class="discount-percentage">(${item.prices.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.returnPeriod} Days</span> return available
              </div>
              <div class="delivery-details">
                Deliver after
                <span class="delivery-details-days">${item.deliveryDays} Days</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeItem(${item.id})">X</div>
          </div>`;
}
