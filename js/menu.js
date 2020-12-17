const drinksButtom = document.querySelector(".drinks-btn");
const foodButton = document.querySelector(".food-btn");

const drinkItems = document.querySelector(".coffe-drinks");
const foodItems = document.querySelector(".food-items");

foodButton.addEventListener("click", () => {
  drinkItems.classList.add("clipped");
  drinkItems.classList.remove("not-clipped");
  foodItems.classList.remove("clipped");
  foodItems.classList.add("not-clipped");
});

drinksButtom.addEventListener("click", () => {
  foodItems.classList.add("clipped");
  foodItems.classList.remove("not-clipped");
  drinkItems.classList.remove("clipped");
  drinkItems.classList.add("not-clipped");
});
