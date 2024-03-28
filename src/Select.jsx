import React, { useState } from "react";

function Select({ product }) {
  const [selectedQty, setSelectedQty] = useState(1);

  const handleChange = (e) => {
    setSelectedQty(e.target.value);
  };

  return (
    <label htmlFor="selctedQty">
      Qty:
      <select
        value={selectedQty}
        onChange={handleChange}
        className="ms-2"
        name="selectedQty"
        id="electedQty"
      >
        {Array.from({ length: product.stock }, (_, index) => {
          return index + 1;
        }).map((number, index) => {
          return (
            <option key={index} value={number}>
              {number}
            </option>
          );
        })}
       
      </select>
      <div>Selected QTY: {selectedQty}</div>
    </label>
  );
}

export default Select;
