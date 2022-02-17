import React, { useContext } from "react";
// import context from "react-bootstrap/esm/AccordionContext";
import { rentContext } from "../App";
import { useNavigate } from "react-router-dom";
function Evbike() {
  let data = [
    {
      img: "https://media.zigcdn.com/media/model/2020/Jun/tvs-iqube_360x240.jpg",
      name: "TVS Iqube Electric",
      price: "1000",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Apr/ather-450x-asdd_360x240.jpg",
      name: "Ather 450x",
      price: "750",
    },
    {
      img: "https://media.zigcdn.com/media/model/2020/Feb/bajaj-chetak-right-side-view_360x240.jpg",
      name: "Bajaj Chetak",
      price: "500",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Sep/simple-one-po-right-side-view_360x240.jpg",
      name: "Simple Energy One",
      price: "1000",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Dec/infinity_360x240.jpg",
      name: "Bounce Infinity E1",
      price: "800",
    },
    {
      img: "https://media.zigcdn.com/media/model/2021/Aug/ola-electric-scoo-right-side-view_360x240.jpg",
      name: "Ola s1",
      price: "400",
    },
    {
      img: "https://media.zigcdn.com/media/model/2022/Jan/tork-kratos-right-side-view_360x240.jpg",
      name: "Tork Kartos",
      price: "600",
    },
    {
      img: "https://media.zigcdn.com/media/model/2019/Oct/e-plus-right-side-view_360x240.jpg",
      name: "Avon E Plus",
      price: "500",
    },
  ];

  let context = useContext(rentContext);

  let navigate = useNavigate();
  return (
    <div className="camera">
      <div className="grid2">
        {data.map((e, i) => {
          return (
            <div className="text-center m-5 bg-white p-3 rounded" key={i}>
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
                  className="btn btn-outline-success ml-auto mt-2"
                  style={{
                    marginRight: "15px",
                    width: "110px",
                    height: "40px",
                  }}
                  onClick={() => {
                    let print = context.cart.findIndex(
                      (c) => c.name === e.name
                    );
                    console.log(print);
                    if (print > -1) {
                      context.cart[print]["quality"] += 1;
                      navigate("/cart");
                    } else {
                      e["quality"] = 1;
                      context.cart.push(e);
                      context.setCartValue(context.cart.length);
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Evbike;
