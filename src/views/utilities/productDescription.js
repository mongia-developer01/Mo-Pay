import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AddProducts from "./addproducts/AddProducts";

const ProductDescription = ({ addItem, setAddedItem }) => {
  const [addedItems, setLocalAddedItems] = useState([]);

  function removeItem(item) {
    const newItems = addedItems.filter(
      (addedItem) => addedItem.id !== item.id
    );
    setLocalAddedItems(newItems);
    localStorage.setItem("addedItems", JSON.stringify(newItems));
    setAddedItem(newItems);
  }

  useEffect(() => {
    const savedItems = localStorage.getItem("addedItems");
    setLocalAddedItems(savedItems ? JSON.parse(savedItems) : []);
  }, []);

  function handleCheckout() {
    setAddedItem(addedItems);
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
  }

  return ( 
      <AddProducts
        items={addedItems}
        removeItem={removeItem}
        setAddedItem={setLocalAddedItems}
        handleCheckout={handleCheckout}
      />
  );
};

export default ProductDescription;
