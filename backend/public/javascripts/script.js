const fetchFoodItemsCount = async () => {
    const baseurl = "https://tomato-server-u4f6.onrender.com"
  const response = await fetch(`${baseurl}/api/food/list`);
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
