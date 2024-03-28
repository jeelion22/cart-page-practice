import React, { useEffect, useState } from "react";

function Card({ product, remove, handleTotal, setCartAmount, cartAmount }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    setCartAmount([...cartAmount, price]);
  }, []);

  const handleDecrement = () => {
    qty > 1 && setQty((qty) => qty - 1);

    setPrice(qty * product.price);

    handleTotal(price);
  };

  const handleIncrement = () => {
    if (product.stock - qty > 0) {
      setQty((qty) => qty + 1);

      setPrice(qty * product.price);

      handleTotal(price);
    }
  };

  return (
    <tr>
      <td>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/id/237/200/300
            "
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Ratings: {product.rating}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <button onClick={handleDecrement}>-</button> {qty}
        <button onClick={handleIncrement}>+</button>
      </td>
      <td>
        <span>${qty * product.price}.00</span>
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
    </tr>
  );
}

export default Card;
