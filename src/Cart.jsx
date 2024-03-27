import React from "react";
import Card from "./Card";
import Select from "./Select";

function Cart({ prdts, remove }) {
  return (
    <table className="table table-success">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {prdts.map((product, index) => {
          return (
            <>
              <tr>
                <th scope="row" rowSpan={2}>
                  {product.id}
                </th>
                <td rowSpan={2}>
                  <Card key={index} product={product} />
                </td>
                <td rowSpan={2}>
                  <Select key={index} product={product} />
                </td>
                <td>${product.price}.00</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      remove(product);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </>
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
          <td colSpan={2}>TOTAL</td>
          <td colSpan={2}>$</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Cart;
