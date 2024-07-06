import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
// import { enqueueSnackbar } from "notistack";
// import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState("All");

  // const myHandler = () => {
  //   axios
  //     .post("/http:localhost:5555/test", {"name" : "razak"})
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err.message));
  // };

  return (
    <div>
      {/* <button onClick={() => myHandler()}>HOME</button> */}
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
