const views = document.querySelector(".for-pageviews");
const range = document.querySelector(".range");
const toggle = document.getElementById("toggle");
const priceElements = document.querySelectorAll(".price");
const periodElements = document.querySelectorAll(".period");

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
  const value = range.value;
  const viewsValue = viewsObj[value];
  let priceValue = priceObj[value];

  const percent = ((value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(to right, #a4f3eb ${percent}%, #ecf0fb ${percent}%)`;

  if (toggle.checked === true) {
    priceValue = priceObj[value] * 0.75 * 12;
    periodElements.forEach((element) => {
      element.textContent = "/ year";
    });
  } else {
    periodElements.forEach((element) => {
      element.textContent = "/ month";
    });
  }

  views.textContent = viewsValue.toUpperCase();
  priceElements.forEach((element) => {
    element.textContent = `$ ${priceValue.toFixed(2)}`;
  });
}
range.addEventListener("input", UpdateViewsAndPrice);
toggle.addEventListener("change", UpdateViewsAndPrice);

UpdateViewsAndPrice();
