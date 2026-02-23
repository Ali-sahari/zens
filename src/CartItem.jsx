import { useContext, useEffect, useState } from "react";
import { LangContext, CartContext } from "./CartContext";
import { Link } from "react-router-dom";
export default function CartItem({ item }) {
  const { lang, trasnaltions, coin, Currency } = useContext(LangContext);
  const {
    products,
    cart,
    addToCart,
    totalPrice,
    totalItems,
    updateQuantity,
    removeFromCart,
  } = useContext(CartContext);
  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () =>
    updateQuantity(item.id, Math.max(1, item.quantity - 1));

  return (
    <>
      <ul className="list-group d-none d-lg-inline ">
        <li
          style={{
            border: "none",
            borderBottom: "1px solid #E6EAEC",
          }}
          className="list-group-item "
        >
          <div className="row align-items-center">
            <div className="col-md-5 col-4 d-flex align-items-center gap-3">
              <div className="border" style={{ width: "35%" }}>
                <img
                  src={item.img}
                  className="  rounded img-fluid"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="fw-semibold t-3">
                <p style={{ fontSize: "0.9rem" }}>{item.name}</p>
                <span className=" text-muted">
                  {trasnaltions[lang].Color} :{" "}
                </span>
                <span className="ms-2  text-muted">
                  {trasnaltions[lang].Size} :{" "}
                </span>
                <br />
                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "0.8rem",
                  }}
                  className=" text-muted mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                  <span>{trasnaltions[lang].Remove}</span>
                </button>
              </div>
            </div>
            <div className=" mt-4 col-md-2 text-end">
              <p className="fw-bold">
                {" "}
                {coin === "USD" && "$"}
                {coin === "QAR" && "﷼"}
                {coin === "TRY" && "₺"}
                {item.price}
              </p>
            </div>
            <div className="  col-md-3 col-3  d-flex justify-content-center align-items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10) || 1)
                }
                className="form-control text-center rounded-pill mx-2 mt-3"
                style={{ maxWidth: "60px" }}
              />
            </div>

            <div className=" mt-3 col-md-2 col-3 fw-bold fw-bold text-center">
              {coin === "USD" && "$"}
              {coin === "QAR" && "﷼"}
              {coin === "TRY" && "₺"}
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </li>
      </ul>
      {/* مقاس الهاتف */}
      <ul className="list-group d-inline d-lg-none ">
        <li
          style={{
            border: "none",
            border: "1px solid #E6EAEC",
          }}
          className="list-group-item mt-3 "
        >
          <div className="row align-items-center">
            <div className="col-md-5 col-12 d-flex align-items-center gap-3">
              <div className="border" style={{ width: "35%" }}>
                <img
                  src={item.img}
                  className="  rounded img-fluid"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="fw-semibold t-3">
                <p style={{ fontSize: "0.9rem" }}>{item.name}</p>
                <span className=" text-muted">
                  {trasnaltions[lang].Color} :{" "}
                </span>
                <span className="ms-2  text-muted">
                  {trasnaltions[lang].Size} :{" "}
                </span>
                <br />
                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "0.8rem",
                  }}
                  className=" text-muted mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                  <span>{trasnaltions[lang].Remove}</span>
                </button>
              </div>
            </div>
            <div className=" mt-4 col-4 col-md-2 text-center">
              <p className="fw-bold">{trasnaltions[lang].Price}</p>
            </div>
            <div className="  col-md-3 col-4 fw-bold  justify-content-center align-items-center gap-2">
              {trasnaltions[lang].Quantity}
            </div>

            <div className=" mt-3 col-md-2 col-4 fw-bold fw-bold text-center">
              <p>{trasnaltions[lang].Total}</p>
            </div>
            <hr />
            <div className=" mt-4 col-4 col-md-2 text-center">
              <p className="fw-bold">
                {" "}
                {coin === "USD" && "$"}
                {coin === "QAR" && "﷼"}
                {coin === "TRY" && "₺"}
                {item.price}
              </p>
            </div>
            <div className="  col-md-3 col-4  d-flex justify-content-center align-items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10) || 1)
                }
                className="form-control text-center rounded-pill mx-2 mt-3"
                style={{ maxWidth: "60px" }}
              />
            </div>

            <div className=" mt-3 col-md-2 col-4 fw-bold fw-bold text-center">
              <p>
                {" "}
                {coin === "USD" && "$"}
                {coin === "QAR" && "﷼"}
                {coin === "TRY" && "₺"}
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
