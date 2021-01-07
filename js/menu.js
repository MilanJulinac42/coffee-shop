const drinksButtom = document.querySelector(".drinks-btn");
const foodButton = document.querySelector(".food-btn");

const drinkItems = document.querySelector(".coffe-drinks");
const foodItems = document.querySelector(".food-items");

const menuItems = document.querySelector(".menu-items");
const itemsSection = document.querySelector(".items-section");

foodButton.addEventListener("click", () => {
  drinkItems.classList.add("clipped");
  drinkItems.classList.remove("not-clipped");
  foodItems.classList.remove("clipped");
  foodItems.classList.add("not-clipped");
  menuItems.style.height = "540px";
  itemsSection.style.height = "540px";
});

drinksButtom.addEventListener("click", () => {
  foodItems.classList.add("clipped");
  foodItems.classList.remove("not-clipped");
  drinkItems.classList.remove("clipped");
  drinkItems.classList.add("not-clipped");
  menuItems.style.height = "1000px";
  itemsSection.style.height = "1000px";
});
