import React, { useEffect } from "react";
import "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  return (
      <div className="card">
      <Link to={`/utils/util-productDetails/${product.id}`}>
      <img className="card__img" src={product.image} alt="" />
      </Link>
        <div>
          <h2>{product.category}</h2>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
        </div>
        <div className="card-price-add">
          <span>Price : ${product.price}</span>
          <button
            className={isAdded ? "add-item-btn" : "remove-item-btn"}
            onClick={() => {
              isAdded ? addItem(product) : removeItem(product);
              setIsAdded(!isAdded);
            }}
          >
            {isAdded ? "ADD " : "CANCEL"}
          </button>
        </div>
      </div>
  );
};

export default Card;
