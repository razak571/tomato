const fetchFoodItemsCount = async () => {
  const response = await fetch("http://localhost:5555/api/food/list");
  const foodData = await response.json();
  displayCount(foodData);
};

document
  .getElementById("fetchButton")
  .addEventListener("click", fetchFoodItemsCount);

const displayCount = (data) => {
  const dataDisp = document.getElementById("foodItemsCount");
  dataDisp.innerHTML = "";
  dataDisp.innerText = `Total number of Food Items Available are ${data.count}`;
};
