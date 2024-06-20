import React, { useRef } from "react";
import CardList from "./CardList";
import "./AddProducts.css";

const AddProducts = ({ items, click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => pre + Number(cur.addNumber) * Number(cur.price), 0)
    .toFixed(2);

  const showDivRef = useRef(null);

const handleCheckOut = () => {
  if (window.confirm("Do you want to purchase these items?")) {
    // order is placed successfully
    alert("Order placed successfully!");
    setAddedItem([]); // clear the cart
  } else {
    // order is terminated
    alert("Order terminated.");
  }
};

  return (
    <div ref={showDivRef} className="addproducts__container">
      <div className="left-side">
        <div className="check-out-container">
          <div className="check-out-print">
            <h1 className="check-out-title">Shopping</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="table-item-title">Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.addNumber}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="total" colSpan={2}>
                    Total
                  </td>
                  <td className="total" colSpan={2}>
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="check-out">
              <button
                className="check-out-btn"
                onClick={handleCheckOut}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-header">
          <h1>
            Shopping <span className="total-items">{items.length}</span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
        </div>
        <div className="right-side-body">
          {items.map((item, i, itemsArr) => (
            
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
            
          ))}
        
        <div className="right-side-footer">
          <div className="bar"></div>
          <div className="footer-head">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="check-out">
            <button
              className="check-out-btn"
              onClick={handleCheckOut}
            >
              Check Out
            </button>&nbsp;&nbsp;
            <button
            className="check-out-btn"
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          >
            BACK
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddProducts;
