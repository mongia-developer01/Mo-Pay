import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "./header/Header";
import AddProducts from "./addproducts/AddProducts";
import CardBody from "./cards/CardBody";
import Button from "./button/Button";
import { withAuth } from 'views/dashboard/Default/login';

const ProductContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const NavContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const BodyContainer = styled(Box)({
  flex: 1,
  overflow: "auto",
  padding: "16px",
});

const Product = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState(() => {
    const savedItems = localStorage.getItem("addedItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
  }, [addedItems]);

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

  return (
    <ProductContainer>
      <NavContainer>
        <Header />
        <Button num={addedItems.length} click={setShowAddProducts} />
      </NavContainer>

      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}

      <BodyContainer>
        <CardBody
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </BodyContainer>
    </ProductContainer>
  );
};

export default withAuth(Product);
