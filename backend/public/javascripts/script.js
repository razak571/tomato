const btn = document.getElementById("fetchButton");

const fetchFoodItemsCount = async () => {
  // const baseurl = "http://localhost:5555";
  const baseurl = "https://tomato-server-u4f6.onrender.com";
  const response = await fetch(`${baseurl}/api/food/list`);
  const foodData = await response.json();
  displayCount(foodData);
};

btn.addEventListener("click", fetchFoodItemsCount);

const displayCount = (data) => {
  const dataDisp = document.getElementById("foodItemsCount");
  dataDisp.innerHTML = "";
  dataDisp.innerText = `Total number of Food Items Available are ${data.count}`;
};
