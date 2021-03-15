const drinksButtom = document.querySelector(".drinks-btn");
const foodButton = document.querySelector(".food-btn");

const drinkItems = document.querySelector(".coffe-drinks");
const foodItems = document.querySelector(".food-items");

const menuItems = document.querySelector(".menu-items");
const itemsSection = document.querySelector(".items-section");

const item = document.querySelector(".li-item");

let foodItemsHeight = 0;
let drinkItemsHeight = 0;

let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

calculateItemSize = (param) => {
  foodItemsHeight =
    ((item.offsetHeight + parseFloat(getComputedStyle(item).fontSize) * 4) *
      8) /
    param;
  drinkItemsHeight =
    ((item.offsetHeight + parseFloat(getComputedStyle(item).fontSize) * 4) *
      14) /
    param;
};

checkSize = () => {
  if (width < 1500) {
    calculateItemSize(1);
  } else {
    calculateItemSize(2);
  }
};

onresize = () => {
  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  checkSize();
};

handleClick = (addItemsClass, removeItemsClass, height) => {
  addItemsClass.classList.add("clipped");
  addItemsClass.classList.remove("not-clipped");
  removeItemsClass.classList.remove("clipped");
  removeItemsClass.classList.add("not-clipped");
  menuItems.style.height = height + "px";
  itemsSection.style.height = height + "px";
  console.log(height);
};

foodButton.addEventListener("click", () => {
  handleClick(drinkItems, foodItems, foodItemsHeight);
});

drinksButtom.addEventListener("click", () => {
  handleClick(foodItems, drinkItems, drinkItemsHeight);
});

checkSize();
