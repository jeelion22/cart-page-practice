import React from "react";

function Card({ product }) {
  return (
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
  );
}

export default Card;
