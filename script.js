const views = document.querySelector(".for-pageviews");
const range = document.querySelector(".range");
const price = document.querySelector(".price");
const toggle = document.getElementById("toggle");
let number = null;

const viewsObj = {
  1: "10K pageviews",
  2: "50K pageviews",
  3: "100K pageviews",
  4: "500K pageviews",
  5: "1M pageviews",
};

const priceObj = {
  1: 8,
  2: 12,
  3: 16,
  4: 24,
  5: 36,
};

function UpdateViewsAndPrice() {
  let value = range.value;
  let priceValue = priceObj[value];
  let viewsValue = viewsObj[value];

  if (toggle.checked === true) {
    priceValue = priceObj[value] * 0.75 * 12;
    document.querySelector(".period").textContent = "/ year";
  } else {
    document.querySelector(".period").textContent = "/ month";
  }

  views.textContent = viewsValue;
  price.textContent = `$ ${priceValue.toFixed(2)}`;

  range.addEventListener("change", UpdateViewsAndPrice);
  toggle.addEventListener("change", UpdateViewsAndPrice);
}
UpdateViewsAndPrice();
