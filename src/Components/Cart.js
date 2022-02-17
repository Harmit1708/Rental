import React, { useContext } from "react";
import { rentContext } from "../App";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Cart() {
  let context = useContext(rentContext);

  let cartPrice = 0;

  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartValue(context.cart.length);
  };

  let handleMinus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    if (index !== -1) {
      context.cart[index]["q"] = context.cart[index]["q"] - 1;
      context.setCartValue(context.cart.length);
    }
  };

  let handlePlus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    if (index !== -1) {
      context.cart[index]["q"] += 1;
      context.setCartValue(context.cart.length);
    }
  };
  return (
    <div className="camera px-3">
      {context.cart.length > 0 ? (
        <>
          {context.cart.map((e, i) => {
            cartPrice = cartPrice + Number(e.price * e.quality);
            return (
              <>
                <div className="grid3">
                  <div
                    className=" text-center m-5 bg-white p-3 rounded"
                    key={i}
                  >
                    <img className="img" src={e.img} alt="Canon"></img>
                    <br />
                    <br />
                    <span className="blockquote" style={{ fontSize: "18px" }}>
                      {e.name}
                    </span>
                    <hr />
                    <div className="d-flex flex-direction-row">
                      <p className="lead pt-2">&#x20B9;{e.price} / day</p>
                      <button
                        className="btn btn-outline-danger ml-auto mt-2"
                        style={{
                          marginRight: "15px",
                          width: "170px",
                          height: "40px",
                        }}
                        onClick={() => {
                          handleRemove(e);
                        }}
                      >
                        Remove from Cart
                      </button>
                    </div>
                    <br />
                    <div>
                      <br></br>
                      <button
                        className="btn btn-outline-danger mr-2"
                        onClick={() => {
                          handleMinus(e);
                        }}
                      >
                        <RemoveIcon />
                      </button>
                      Qty:{e.quality}
                      <button
                        className="btn btn-outline-success ml-2"
                        onClick={() => {
                          handlePlus(e);
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="">
            <div className="text-center">Total Pay : {cartPrice}</div>
            <Link to="/">
              <button
                className="btn btn-primary text-center d-flex m-auto mt-3 mb-3"
                onClick={() => {
                  context.setCart([]);
                  context.setCartValue(0);
                }}
              >
                Place Order
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-center">Cart Is Empty!</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
