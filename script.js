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
  let percent = (+value / +range.max) * 100 - 6; // The background was misaligned with the thumb, so I'm manually reducing the percentage by 6 to fix it.

  range.style.background = `linear-gradient(to right, #a4f3eb ${percent}%, #ecf0fb ${percent}%)`;

  if (toggle.checked === true) {
    priceValue = priceObj[value] * 0.75 * 12;
    document.querySelector(".period").textContent = "/ year";
  } else {
    document.querySelector(".period").textContent = "/ month";
  }

  views.textContent = viewsValue;
  price.textContent = `$ ${priceValue.toFixed(2)}`;

  range.addEventListener("input", UpdateViewsAndPrice);
  toggle.addEventListener("change", UpdateViewsAndPrice);
}
UpdateViewsAndPrice();
