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
function perMonth(range) {
  range.addEventListener("change", (e) => {
    views.textContent = `${viewsObj[e.target.value]}`.toLocaleUpperCase();
    price.textContent = `$ ${priceObj[e.target.value]}.00`;
  });
}

toggle.addEventListener("change", (e) => {
  if (toggle.checked === true) {
    range.addEventListener("change", (e) => {
      number = priceObj[e.target.value] * 0.75 * 12;
      views.textContent = `${viewsObj[e.target.value]}`.toLocaleUpperCase();
      price.textContent = `$ ${number}.00`;
    });
  } else {
    perMonth(range);
  }
});
perMonth(range);
