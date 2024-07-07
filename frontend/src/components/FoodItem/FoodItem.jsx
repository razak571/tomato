import React, { useContext, useEffect, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, fetchFoodList } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          src={url + "/images/" + image}
          alt="image"
          className="food-item-image"
        />
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            alt="add-icon-white"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt="remove-icon-red"
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt="add-icon-green"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-image" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
