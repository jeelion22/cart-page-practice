import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function Cart({ prdts, remove }) {
  const [total, setTotal] = useState(0);

  const handleTotal = (price) => {
    setTotal((total) => total + price);
  };

  return (
    <table className="table table-success">
      <thead>
        <tr>
          <th scope="col" colSpan={5}>
            Cart
          </th>
        </tr>
      </thead>
      <tbody>
        {prdts.map((product) => {
          return (
            <Card
              product={product}
              key={product.id}
              remove={remove}
              handleTotal={handleTotal}
            />
          );
        })}
      </tbody>
      <tfoot className="sticky-bottom">
        <tr>
          <td colSpan={2}>SUBTOTAL:</td>
          <td colSpan={2}>$</td>
        </tr>
        <tr>
          <td colSpan={2}>SHIPPING</td>
          <td colSpan={2}>FREE</td>
        </tr>
        <tr>
          <td colSpan={2}>TOTAL </td>
          <td colSpan={2}>${total}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Cart;
