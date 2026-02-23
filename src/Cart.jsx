

import { useContext, useEffect, useState } from "react";
import { LangContext, CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
export default function Cart() {
  const { lang, trasnaltions, coin, Currency } = useContext(LangContext);
  const {    
    cart,    
    totalPrice,        
    removeFromCart,
    total,
    stetotal,
    taxto,
    setShopselect,
    shopselect,
  } = useContext(CartContext);
  const [copon, setcopon] = useState("");
  const [value, setValue] = useState(totalPrice / 3);
  useEffect(() => {
    stetotal(totalPrice.toFixed(2));
  }, [totalPrice]);
  // if ( cart.length === 0) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12  ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ marginTop: "10rem", backgroundColor: "#F0F1F3" }}
  //           >
  //             <div className="row">
  //               <div className="col-md-11 ">
  //                 <p className=" text-muted">
  //                   <i className="fa-regular fa-bell fa-fade fa-xl"></i>
  //                   <span className="ms-2 ">{trasnaltions[lang].warning1}</span>
  //                 </p>
  //               </div>
  //               <div className="col-md-1">
  //                 <button className="warningbtn w-100 py-2">
  //                   {trasnaltions[lang].warningbtn1}
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-12 mt-4 ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ backgroundColor: "#F0F1F3" }}
  //           >
  //             <p className=" text-muted">
  //               <i className="fa-regular fa-bell fa-fade fa-xl"></i>
  //               <span className="ms-2 ">{trasnaltions[lang].warning2}</span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-md-12 mt-4 ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ backgroundColor: "#F0F1F3" }}
  //           >
  //             <p className=" text-muted">
  //               <i className="fa-regular fa-bell fa-fade fa-xl"></i>
  //               <span className="ms-2 ">{trasnaltions[lang].warning3}</span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-md-2 mt-3 ">
  //           <Link to="/">
  //             <button className="w-100 py-3 warningbtn">
  //               {trasnaltions[lang].warningbtn2}
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  const COPON = () => {
    if (copon === "DISCOUNT10") {
      alert(trasnaltions[lang].discount);
      setcopon("");
      stetotal(totalPrice * 0.7);
      setDiscount(totalPrice * 0.7);
    } else if (copon === "SAVE8") {
      alert(trasnaltions[lang].discount2);
      setcopon("");
      stetotal(totalPrice * 0.92);
      setDiscount(totalPrice * 0.92);
    } else if (copon === "SUPER18") {
      alert(trasnaltions[lang].discount3);
      setcopon("");
      stetotal(totalPrice * 0.82);
      setDiscount(totalPrice * 0.82);
    } else if (copon === "ULTRA22") {
      alert(trasnaltions[lang].discount4);
      setcopon("");
      stetotal(totalPrice * 0.78);
      setDiscount(totalPrice * 0.78);
    } else if (copon === "FLASH35") {
      alert(trasnaltions[lang].discount5);
      setcopon("");
      stetotal(totalPrice * 0.65);
      setDiscount(totalPrice * 0.65);
    }
  };

  const [Giveacoupon, setGiveacoupon] = useState("");

  const availableCoupons = [
    "DISCOUNT10",
    "SAVE8",
    "SUPER18",
    "ULTRA22",
    "FLASH35",
  ];

  const handleGiveCoupon = () => {
    setGiveacoupon(trasnaltions[lang].Loding);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableCoupons.length);
      const newCoupon = availableCoupons[randomIndex];
      setGiveacoupon(newCoupon);
    }, 3000);
  };
  const removeAllFromCart = () => {
    cart.forEach((item) => removeFromCart(item.id));
  };

  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    if (totalPrice > 299) {
      setShopselect(0);
    }
  }, [totalPrice]);

  return (
    <>
      <div
        className="container-fluid"
        style={{
          marginTop: "11rem",
          backgroundColor: "#F6F6F6",
        }}
      >
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-10 col-8">
              <h1 className="fs-5">{trasnaltions[lang].Cart}</h1>
            </div>

            <div className="col-md-2 col-4 text-end">
              <p style={{ fontSize: "0.8rem", marginBottom: 0 }}>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  {trasnaltions[lang].Home}
                </Link>
                {" / "}
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to="/About"
                >
                  {trasnaltions[lang].Cart}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-8 mt-5">
            <div className="shadow-sm p-3">
              <div
                style={{
                  height: "400px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overflowX: "hidden",
                }}
                className=""
              >
                <div
                  className="row ms-2 d-none d-lg-flex "
                  style={{
                    border: "none",
                    borderBottom: "1px solid #E6EAEC",
                  }}
                >
                  <div className="col-md-4   col-4 fw-bold">
                    {trasnaltions[lang].cardProduct}
                  </div>
                  <div className="col-md-3  text-end col-3 fw-bold">
                    {trasnaltions[lang].Price}
                  </div>
                  <div className="col-md-3  text-center col-3 fw-bold">
                    {trasnaltions[lang].Quantity}{" "}
                  </div>
                  <div className="col-md-2  text-center col-3 fw-bold">
                    {trasnaltions[lang].Total}{" "}
                  </div>
                </div>
                <div className="mt-2">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <div className="row"></div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="mt-3 input-group ">
                    <input
                      onChange={(e) => setcopon(e.target.value)}
                      value={copon}
                      placeholder={trasnaltions[lang].Couponcode}
                      style={{ height: "40px" }}
                      type="text"
                      className="form-control  d-inline "
                      name=""
                      id=""
                    />
                    <button
                      onClick={COPON}
                      style={{ height: "40px" }}
                      className="warningbtn px-2  "
                    >
                      {trasnaltions[lang].Applycoupon}
                    </button>
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div className="mt-3  input-group">
                    <input
                      style={{ height: "40px" }}
                      type="text"
                      className="form-control d-inline"
                      value={Giveacoupon}
                      readOnly
                    />
                    <button
                      onClick={handleGiveCoupon}
                      style={{ height: "40px" }}
                      className="warningbtn px-2"
                      disabled={Giveacoupon === "Loding..."}
                    >
                      {trasnaltions[lang].Giveacoupon}
                    </button>
                  </div>
                  {/* <button
                    onClick={() => {
                      if (cart.length === 0) return;
                      removeAllFromCart();
                    }}
                    className="btn btn-danger"
                  >
                    {trasnaltions[lang].Clearcart}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5  ">
            <div className=" p-4 shadow-sm" style={{ overflow: "hidden" }}>
              <h1 className="fs-4">{trasnaltions[lang].OrderSummary}</h1>
              <hr />
              <div className="row">
                <div className="col-md-8 col-8">
                  <p className="fw-bold">{trasnaltions[lang].Subtotal}</p>
                </div>
                <div className="col-md-4 col-4 shrink-text ">
                  {coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"}
                  {totalPrice.toFixed(2)}
                </div>
                <div className="col-md-3 col-3 mt-1">
                  <p className="fw-bold">{trasnaltions[lang].Shipping}</p>
                </div>
                <div className="col-md-9 col-9">
                  <select
                    onChange={(e) => setShopselect(e.target.value)}
                    value={shopselect}
                    className="form-select"
                    name=""
                    id=""
                  >
                    <option value={4.99}>
                      {trasnaltions[lang].StandardDelivery}
                      {Currency[coin].shop1}
                    </option>
                    <option value={12.99}>
                      {trasnaltions[lang].ExpressDelivery}
                      {Currency[coin].shop2}
                    </option>
                    <option value={0} disabled={totalPrice < 301}>
                      {trasnaltions[lang].Free}
                    </option>
                  </select>
                </div>
                <div className="col-md-8 col-8 mt-3">
                  <p className="text-muted">{trasnaltions[lang].Tax}</p>
                </div>
                <div className="col-md-1 col-4 mt-3">
                  {" "}
                  {coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"}
                  {taxto.toFixed(2)}
                </div>
                <div className="col-md-8 col-8 mt-1">
                  <p className="text-muted">{trasnaltions[lang].Discount}</p>
                </div>
                <div className="col-md-4 col-4 mt-1">
                  - {coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"}
                  {discount.toFixed(2) + taxto - shopselect}
                </div>

                <hr />
                <div className="col-md-8 col-8">
                  <p className="fw-bold">{trasnaltions[lang].Total}</p>
                </div>
                <div className="col-md-4 col-4 fw-bold ">
                  {coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"}
                  {total + taxto - shopselect}
                </div>
                <Link to="/Checkout">
                  <button className="warningbtn w-100  warningbtn4 py-3 mt-2 rounded-3">
                    {trasnaltions[lang].ProceedtoCheckout}{" "}
                    <i className="fa-solid fa-arrow-right faArrowRight"></i>
                  </button>
                </Link>

                <div className="text-center mt-3 ContinueShopping">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                    to="/"
                  >
                    <i className="fa-solid fa-arrow-left-long faarrowleftlong"></i>{" "}
                    {trasnaltions[lang].ContinueShopping}
                  </Link>
                </div>
              </div>
              <hr />
              <div className="text-muted text-center">
                <p>{trasnaltions[lang].WeAccept}</p>
                <div className="d-flex gap-3 mt-5 justify-content-center  fa-lg">
                  <i className="fa-regular fa-credit-card fa-lg"></i>
                  <i className="fa-brands fa-paypal fa-lg"></i>
                  <i className="fa-solid fa-wallet fa-lg"></i>
                  <i className="fa-solid fa-building-columns fa-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
