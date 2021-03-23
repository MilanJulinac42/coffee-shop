const drinksButtom = document.querySelector(".drinks-btn");
const foodButton = document.querySelector(".food-btn");

const drinkItems = document.querySelector(".coffe-drinks");
const foodItems = document.querySelector(".food-items");

const drinkKids = document.querySelectorAll(
  ".coffe-drinks .item-cards .li-item"
);
const foodKids = document.querySelectorAll(".food-items .item-cards .li-item");

const menuItems = document.querySelector(".menu-items");
const itemsSection = document.querySelector(".items-section");

const item = document.querySelector(".li-item");

let testH = 0;
let testF = 0;

let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

calculateItemSize = (param) => {
  testF = 0;
  testH = 0;
  foodKids.forEach((element) => {
    testF +=
      element.clientHeight +
      (parseFloat(getComputedStyle(element).fontSize) * 4) / param;
  });
  drinkKids.forEach((element) => {
    testH +=
      element.clientHeight +
      (parseFloat(getComputedStyle(element).fontSize) * 4) / param;
  });
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
  handleClick(foodItems, drinkItems, testH);
};

handleClick = (addItemsClass, removeItemsClass, height) => {
  addItemsClass.classList.add("clipped");
  addItemsClass.classList.remove("not-clipped");
  removeItemsClass.classList.remove("clipped");
  removeItemsClass.classList.add("not-clipped");
  menuItems.style.height = height + "px";
  itemsSection.style.height = height + "px";
};

foodButton.addEventListener("click", () => {
  handleClick(drinkItems, foodItems, testF);
});

drinksButtom.addEventListener("click", () => {
  handleClick(foodItems, drinkItems, testH);
});

checkSize();
