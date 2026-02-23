import { useContext, useState } from "react";
import { LangContext, CartContext } from "./CartContext";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";
export default function Checkout() {
  const { lang, trasnaltions, coin, Currency } = useContext(LangContext);
  const {    
    cart,    
    totalPrice,            
    total,    
    taxto,
    shopselect,
  } = useContext(CartContext);
  const [carts, setCarts] = useState("Credit");
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
              <h1 className="fs-5">{trasnaltions[lang].Checkout}</h1>
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
                  to="/Checkout"
                >
                  {trasnaltions[lang].Checkout}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 ">
          <div
            className="col-md-7 py-3 order-2 order-md-1"
            style={{
              height: "680px",
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <form action="">
              <div
                className=" p-4 shadow rounded-3"
                style={{ overflow: "hidden" }}
              >
                <h1 className="fs-4">
                  {trasnaltions[lang].CustomerInformation}
                </h1>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-6">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].FirstName}
                      </label>
                      <input
                        type="text"
                        placeholder={trasnaltions[lang].yourFirstName}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-6">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].LastName}
                      </label>
                      <input
                        type="text"
                        placeholder={trasnaltions[lang].yourLastName}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].EmailAddress}
                      </label>
                      <input
                        type="email"
                        placeholder={trasnaltions[lang].yourEmail}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].PhoneNumber}
                      </label>
                      <input
                        type="tel"
                        placeholder={trasnaltions[lang].yourPhoneNumber}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" p-4 shadow rounded-3 mt-5"
                style={{ overflow: "hidden" }}
              >
                <h1 className="fs-4">{trasnaltions[lang].ShippingAddress}</h1>
                <hr />
                <div className="col-md-12 mt-4">
                  <div className="">
                    <label className="fw-bold" htmlFor="">
                      {trasnaltions[lang].StreetAddress}
                    </label>
                    <input
                      type="text"
                      placeholder={trasnaltions[lang].StreetAddress}
                      className="w-100 form-control mt-2"
                    />
                  </div>
                  <div className=" mt-3">
                    <label className="fw-bold" htmlFor="">
                      {trasnaltions[lang].Apartment}
                    </label>
                    <input
                      type="text"
                      placeholder={trasnaltions[lang].Apartment2}
                      className="w-100 form-control mt-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].City}
                      </label>
                      <input
                        type="email"
                        placeholder={trasnaltions[lang].City}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].State}
                      </label>
                      <input
                        type="email"
                        placeholder={trasnaltions[lang].State}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].ZIPCode}
                      </label>
                      <input
                        type="email"
                        placeholder={trasnaltions[lang].ZIPCode}
                        className="w-100 form-control mt-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="">
                      <label className="fw-bold" htmlFor="">
                        {trasnaltions[lang].ZIPCode}
                      </label>
                      <select name="" id="" className="form-select mt-2 py-2">
                        <option value="">{trasnaltions[lang].option1}</option>
                        <option value="">{trasnaltions[lang].option2}</option>
                        <option value="">{trasnaltions[lang].option3}</option>
                        <option value="">{trasnaltions[lang].option4}</option>
                        <option value="">{trasnaltions[lang].option5}</option>
                        <option value="">{trasnaltions[lang].option6}</option>
                        <option value="">{trasnaltions[lang].option7}</option>
                      </select>
                      <div className="mt-3" style={{ lineHeight: "0.3" }}>
                        <p>
                          <input type="checkbox" name="" id="" />{" "}
                          {trasnaltions[lang].Savethis}
                        </p>
                        <p>
                          <input type="checkbox" name="" id="" />{" "}
                          {trasnaltions[lang].Billing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" p-4 shadow rounded-3 mt-5"
                style={{ overflow: "hidden" }}
              >
                <h1 className="fs-4">{trasnaltions[lang].ShippingAddress}</h1>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-4 ">
                    <div
                      onClick={() => setCarts("Credit")}
                      className=" text-center py-2 rounded-3"
                      style={{
                        border:
                          carts === "Credit"
                            ? "solid #252223 2px"
                            : "solid #E3E3E3 2px",
                        backgroundColor: carts === "Credit" ? "#F4F4F4" : "",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-regular fa-credit-card "
                        style={{ fontSize: "2rem" }}
                      ></i>
                      <p className="CreditDebitCard">
                        {trasnaltions[lang].CreditDebitCard}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-4">
                    <div
                      onClick={() => setCarts("Credit2")}
                      className=" text-center py-2 rounded-3"
                      style={{
                        border:
                          carts === "Credit2"
                            ? "solid #252223 2px"
                            : "solid #E3E3E3 2px",
                        backgroundColor: carts === "Credit2" ? "#F4F4F4" : "",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-brands fa-paypal"
                        style={{ fontSize: "2rem" }}
                      ></i>

                      <p>{trasnaltions[lang].PayPal}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-4">
                    <div
                      onClick={() => setCarts("Credit3")}
                      className=" text-center py-2 rounded-3"
                      style={{
                        border:
                          carts === "Credit3"
                            ? "solid #252223 2px"
                            : "solid #E3E3E3 2px",
                        backgroundColor: carts === "Credit3" ? "#F4F4F4" : "",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-brands fa-apple"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      <p>{trasnaltions[lang].ApplePay}</p>
                    </div>
                  </div>
                  {carts === "Credit" && (
                    <>
                      <div className="row mt-3">
                        <div className="col-md-12 mt-4">
                          <div className="">
                            <label className="fw-bold" htmlFor="">
                              {trasnaltions[lang].CardNumber}
                            </label>
                            <input
                              type="email"
                              placeholder="1234 5678 9012 3456"
                              className="w-100 form-control mt-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mt-4">
                          <div className="">
                            <label className="fw-bold" htmlFor="">
                              {trasnaltions[lang].ExpirationDate}
                            </label>
                            <input
                              type="email"
                              placeholder="MM/YY"
                              className="w-100 form-control mt-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mt-4">
                          <div className="">
                            <label className="fw-bold" htmlFor="">
                              {trasnaltions[lang].Security}
                            </label>
                            <input
                              type="email"
                              placeholder="123"
                              className="w-100 form-control mt-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mt-4">
                          <div className="">
                            <label className="fw-bold" htmlFor="">
                              {trasnaltions[lang].NameonCard}
                            </label>
                            <input
                              type="email"
                              placeholder={trasnaltions[lang].JohnDoe}
                              className="w-100 form-control mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {carts === "Credit2" && (
                    <>
                      <p className="text-muted mt-3">
                        {trasnaltions[lang].Youwill}
                      </p>
                    </>
                  )}
                  {carts === "Credit3" && (
                    <>
                      <p className="text-muted mt-3">
                        {trasnaltions[lang].Youwill2}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div
                className=" p-4 mt-5 shadow rounded-3"
                style={{ overflow: "hidden" }}
              >
                <h1 className="fs-4">{trasnaltions[lang].Review}</h1>
                <hr />
                <p>
                  <input type="checkbox" name="" id="" />
                  <span className="ms-2">
                    {trasnaltions[lang].Iagreetothe}
                  </span>{" "}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#example-modal"
                    type="button"
                    style={{
                      border: "none",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    {trasnaltions[lang].TermsandConditions}
                  </button>{" "}
                  <span>{trasnaltions[lang].and}</span>{" "}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#example-modal"
                    type="button"
                    style={{
                      border: "none",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    {trasnaltions[lang].PrivacyPolicy}
                  </button>
                </p>
                <button
                  className="w-100 py-3 rounded-3"
                  style={{ backgroundColor: "#252223", border: "none" }}
                >
                  <div className="row">
                    <div className="col-md-9 col-8">
                      <div className="text-start">
                        <span className="ms-3 text-white fw-bold">
                          {trasnaltions[lang].PlaceOrder}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="">
                        <span
                          className="text-white fw-bold px-3 py-1 rounded-3"
                          style={{ backgroundColor: "#514E4F" }}
                        >
                          {total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </form>
            <div
              className="modal fade"
              id="example-modal"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {trasnaltions[lang].PrivacyPolicy}
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p></p>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim.
                    </p>
                    <p className="mt-2">
                      Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim. Phasellus
                      molestie magna non est bibendum non venenatis nisl tempor.
                    </p>
                    <p className="mt-2">
                      Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim. Phasellus
                      molestie magna non est bibendum non venenatis nisl tempor.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      {trasnaltions[lang].IUnderstand}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-3 order-1 order-md-2">
            <div
              className=" p-4 shadow rounded-3"
              style={{ overflow: "hidden" }}
            >
              <div className="row">
                <div className="col-md-9">
                  {" "}
                  <h1 className="fs-4">{trasnaltions[lang].OrderSummary}</h1>
                </div>
                <div className="col-md-3">
                  {" "}
                  <span className="text-muted">
                    {" "}
                    {cart.length} {trasnaltions[lang].Items}
                  </span>
                </div>
              </div>
              <hr />
              {cart.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))}
              <hr />
              <div className="row">
                <div className="col-md-8 col-8">
                  <p className="">{trasnaltions[lang].Subtotal}</p>
                </div>
                <div className="col-md-4 col-4 shrink-text ">
                  {coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"}
                  {totalPrice.toFixed(2)}
                </div>
                <div className="col-md-8 col-8">
                  <p className="">{trasnaltions[lang].Shipping}</p>
                </div>
                <div className="col-md-4 col-4 shrink-text ">
                  -{coin === "USD" && "$"}
                  {coin === "QAR" && "﷼"}
                  {coin === "TRY" && "₺"} {shopselect || "0.00"}
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
              </div>
              <div className=" text-center">
                <p style={{ fontWeight: "600" }}>
                  {" "}
                  <i
                    className="fa-solid fa-shield-halved"
                    style={{ color: "#28A745" }}
                  ></i>{" "}
                  {trasnaltions[lang].SecureCheckout}
                </p>
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
