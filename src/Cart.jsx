import React from "react";
import Card from "./Card";
import Quantity from "./Quantity";

function Cart({ prdts, remove }) {
  return (
    <table className="table table-success">
      <thead>
        <tr>
          <th scope="col" colSpan={5}>Cart</th>
         
        </tr>
      </thead>
      <tbody>
        {prdts.map((product, index) => {
          return (
            <>
              <tr>
                <th scope="row">
                  {product.id}
                </th>
                <td>
                  <Card key={index} product={product} />
                </td>

                <Quantity key={index} product={product} remove={remove}/>
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
