import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../redux/BookSlice";

export const BookComponent = () => {
  //useDispatch is responsible for dispatching the action
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Book Component</h1>
      <br/>
      <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Book 1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={()=>{dispatch(addToCart({id:1,name:"java"}))}}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button
            onClick={()=>{dispatch(removeCart(1))}}
            className="btn btn-danger"
          >
            Remove From Cart
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem",margin:"10px" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Book 2</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {
              dispatch(addToCart({ id: 2, name: "python" }));
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              dispatch(removeCart(2));
            }}
            className="btn btn-danger"
          >
            Remove From Cart
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Book 3</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {
              dispatch(addToCart({ id: 3, name: "react" }));
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              dispatch(removeCart(3));
            }}
            className="btn btn-danger"
          >
            Remove From Cart
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};