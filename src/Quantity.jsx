import React, { useState } from "react";

function Quantity({ product, remove }) {
  const [qty, setQty] = useState(1);

  const handleDecrement = () => {
    qty > 1 && setQty((qty) => qty - 1);
  };

  const handleIncrement = () => {
    if (product.stock - qty > 0) {
      setQty((qty) => qty + 1);
    }
  };
  return (
    <>
      <td >
        <button onClick={handleDecrement}>-</button>
        {qty}
        <button onClick={handleIncrement}>+</button>
      </td>
      <td>
        <td>${qty * product.price}.00</td>
      </td>
      
        <td>
          <button
            onClick={() => {
              remove(product);
            }}
          >
            Remove
          </button>
        </td>
     
    </>
  );
}

export default Quantity;
