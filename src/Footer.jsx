import { useContext, useEffect, useState } from "react";
import { LangContext } from "./CartContext";
import { Link } from "react-router-dom";
export default function Footer() {
  const { lang, trasnaltions } = useContext(LangContext);

  return (
    <>
      <div className="container-fluid mt-5" style={{ backgroundColor: "#000000" }}>
        <div className="container p-4 pt-5">
          <div className="row">
            <div className="col-md-4 col-4">
              <div className="">
                <h1 className="fs-4 fw-bold text-white">
                  {trasnaltions[lang].ZENS}
                </h1>
                <p
                  className="text-white mt-4"
                  style={{ opacity: "0.70", fontSize: "0.8rem" }}
                >
                  {trasnaltions[lang].Lorem}
                </p>
                <p
                  className="text-white mt-3 fw-bold"
                  style={{ opacity: "0.70" }}
                >
                  {trasnaltions[lang].ConnectWithUs}
                </p>
                <div className="d-flex gap-2">
                  <div className="iconStyle rounded-2 px-1">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="iconStyle rounded-2 px-1">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="iconStyle rounded-2 px-1">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <h1 className="fw-bold fs-6 text-white">
                {trasnaltions[lang].Shop}
              </h1>
              <div
                className="w-25"
                style={{ backgroundColor: "white", height: "3px" }}
              ></div>
              <ul className="px-0 mt-3">
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].NewArrivals}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].Bestsellers}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].WomensClothing}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].MensClothing}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].Accessories}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].Sale}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-4">
              <h1 className="fw-bold fs-6 text-white">
                {trasnaltions[lang].Support}
              </h1>
              <div
                className="w-25"
                style={{ backgroundColor: "white", height: "3px" }}
              ></div>
              <ul className="px-0 mt-3">
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].HelpCenter}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].OrderStatus}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].ShippingInfo}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].ReturnsExchanges}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].SizeGuide}
                  </Link>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <Link
                    className="text-white listWhite"
                    style={{
                      textDecoration: "none",
                      opacity: "0.70",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                    {trasnaltions[lang].ContactUs}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold fs-6 text-white">
                {trasnaltions[lang].ContactInformation}
              </h1>
              <div
                className=""
                style={{
                  backgroundColor: "white",
                  height: "3px",
                  width: "13%",
                }}
              ></div>
              <div className="mt-3">
                <p className="text-white" style={{ fontSize: "0.8rem" }}>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <span style={{ opacity: "0.70" }}>
                    {trasnaltions[lang].Map}
                  </span>{" "}
                </p>
                <p className="text-white" style={{ fontSize: "0.8rem" }}>
                  <i className="fa-solid fa-phone"></i>{" "}
                   <span style={{ opacity: "0.70" }}>
                    {trasnaltions[lang].phone}
                  </span>
                </p>
                <p className="text-white" style={{ fontSize: "0.8rem" }}>
                  <i className="fa-solid fa-envelope"></i>{" "}
                   <span style={{ opacity: "0.70" }}>
                    {trasnaltions[lang].GMAIL}
                  </span>
                </p>
                <p className="text-white w-50" style={{ fontSize: "0.8rem" }}>
                  <i className="fa-solid fa-clock"></i>{" "}
                   <span className="" style={{ opacity: "0.70"}}>
                    {trasnaltions[lang].min}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5" style={{backgroundColor:"white",height:"0.1px"}}></div>
          <div className="row mt-3">
            <div className="col-md-8">
              <div className="">
                <p className="text-white" style={{fontSize:"0.8rem",opacity:"0.70"}}>
                  {trasnaltions[lang].Copyright}
                  <br />
                  {trasnaltions[lang].DesignedBootstrapMade}
                </p>
                
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="d-flex text-white gap-2">
                <i className=" iconStyle2 fa-regular fa-credit-card"></i>
                <i className=" iconStyle2 fa-brands fa-paypal"></i>
                <i className=" iconStyle2 fa-brands fa-apple"></i>
                <i className=" iconStyle2 fa-brands fa-google"></i>
                <i className=" iconStyle2 fa-solid fa-shop"></i>
                <i className=" iconStyle2 fa-regular fa-money-bill-1"></i>
                <Link className="iconStyle2 text-white" style={{textDecoration: "none",fontSize:"0.8rem"}} to="">{trasnaltions[lang].Terms}</Link>
                <Link className="iconStyle2 text-white" style={{textDecoration: "none",fontSize:"0.8rem"}} to="">{trasnaltions[lang].Privacy}</Link>
                <Link className="iconStyle2 text-white" style={{textDecoration: "none",fontSize:"0.8rem"}} to="">{trasnaltions[lang].Cookies}</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
