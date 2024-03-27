import React from "react";

function Select({ product }) {
  return (
    <label htmlFor="selctedQty">
      Qty:
      <select className="ms-2" name="selectedQty" id="electedQty">
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
    </label>
  );
}

export default Select;
