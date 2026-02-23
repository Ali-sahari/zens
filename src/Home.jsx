import { LangContext } from "./CartContext";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pc from "./assets/HomeImg/pc.png";
import mouse from "./assets/HomeImg/mouse.png";
import keyboard from "./assets/HomeImg/keyboard.png";
import pcbuild from "./assets/HomeImg/pcbuild.png";
import tel from "./assets/HomeImg/tel.png";
import Electronicsimg from "./assets/HomeImg/Electronicsimg.png";
import Furnitureimg from "./assets/HomeImg/Furnitureimg.png";
import Clothingimg from "./assets/HomeImg/Clothingimg.png";
import Jewelry from "./assets/HomeImg/Jewelry.png";
import { CartContext } from "./CartContext";

export default function Home() {
  const { products, addToCart, totalItems, searchTerm, filteredProducts } = useContext(CartContext);
  const { lang, trasnaltions, coin, Currency } = useContext(LangContext);
  const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        pathLength="360"
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      />
    </svg>
  );
  // 🔹 تاريخ النهاية
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 48); // يومين
    return date;
  });

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);

  function getTimeRemaining() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="container-fluid p-5"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 50%, rgba(37,34,35,0.5) 100%)",
          marginTop: "10rem",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="">
                <h1 className="fw-bold w-75">{trasnaltions[lang].Discover}</h1>
                <p
                  className="text-muted"
                  style={{ width: "95%", lineHeight: "1.5" }}
                >
                  {trasnaltions[lang].Exploreourcurated}
                </p>

                <div className="gap-3 d-flex">
                  <button className="darkbtn  px-3">
                    {trasnaltions[lang].darkbtn}
                  </button>
                  <button className="whitebtn px-3  ">
                    {trasnaltions[lang].whitebtn}
                  </button>
                </div>
                <div className="row mt-3   ">
                  <div className="col-md col-5 ">
                    <div className="d-flex gap-2">
                      <i className="fa-regular fa-truck mt-1"></i>
                      <p className="trak">{trasnaltions[lang].trak}</p>
                    </div>
                  </div>
                  <div className="col-md col-5 ">
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-medal mt-1"></i>
                      <p className="QualityGuarantee">
                        {trasnaltions[lang].QualityGuarantee}
                      </p>
                    </div>
                  </div>
                  <div className="col-md col ">
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-headphones mt-1"></i>
                      <p className="Support">{trasnaltions[lang].Support}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row ms-5 ">
                <div className="col-md-7  ">
                  <div
                    className="rounded-3 p-3  mouskeybord  shadow"
                    style={{ backgroundColor: "#FFFFFF", fontSize: "0.7rem" }}
                  >
                    <div className="text-end">
                      <span
                        className="text-white  fw-bold rounded-5 p-2"
                        style={{ backgroundColor: "#1F1D1E" }}
                      >
                        {trasnaltions[lang].BestSeller}
                      </span>
                    </div>
                    <div className="mt-3">
                      <img className="img-fluid" src={pc} alt="" />
                    </div>
                    <p className="mt-5" style={{ fontWeight: "600" }}>
                      {trasnaltions[lang].SleekGamingPC}
                    </p>
                    <div className="d-flex gap-1">
                      <span className="fs-6">${Currency[coin].price1}</span>
                      <span className="opacity-25 mt-1">
                        <s>${Currency[coin].price2}</s>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-none d-sm-inline">
                  <span
                    className="ms-2 shadow  facartshopping "
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "50%",
                      position: "relative",
                      left: "-150px",
                      top: "-300px",
                    }}
                  >
                    <i className="  text-dark fa-solid fa-cart-shopping fa-lg"></i>
                    {totalItems > 0 && (
                      <span
                        className="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle border rounded-circle"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </span>
                  <span
                    className="ms-2 shadow facartshopping2"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "50%",
                      position: "relative",
                      left: "-180px",
                      top: "-180px",
                    }}
                  >
                    <i className="fa-solid shadow  fa-magnifying-glass fa-lg"></i>
                  </span>
                  <span
                    className="ms-2 cheng facartshopping2"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "50%",
                      position: "relative",
                      left: "250px",
                      top: "-150px",
                    }}
                  >
                    <i className="fa-regular fa-heart fa-lg"></i>
                  </span>
                </div>
                <div
                  className="shadow w-25 text-center d-none d-sm-inline rounded-3 div-keyboard"
                  style={{
                    backgroundColor: "white",
                    position: "relative",
                    top: "-320px",
                    left: "230px",
                  }}
                >
                  <img
                    src={mouse}
                    style={{ height: "70px" }}
                    className="img-fluid"
                    alt=""
                  />
                  <p>
                    {coin === "USD" ? "$" : ""}
                    {coin === "QAR" && "﷼"}
                    {coin === "TRY" && "₺"}
                    {Currency[coin].mouse}
                  </p>
                </div>
                <div
                  className="shadow w-25 text-center d-none d-sm-inline rounded-3 div-keyboard"
                  style={{
                    backgroundColor: "white",
                    position: "relative",
                    top: "-200px",
                    left: "105px",
                  }}
                >
                  <img
                    src={keyboard}
                    style={{ height: "70px" }}
                    className="img-fluid "
                    alt=""
                  />
                  <p>
                    {coin === "USD" ? "$" : ""}
                    {coin === "QAR" && "﷼"}
                    {coin === "TRY" && "₺"}
                    {Currency[coin].mousekeyboard}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6 TrendingNow">
            <div
              className="p-4 rounded "
              style={{ backgroundColor: "#F8F5FF" }}
            >
              <div className="row  ">
                <div
                  className="col-md-6 col-12  order-1"
                  style={{ lineHeight: "3" }}
                >
                  <span
                    className="fw-bold px-5  rounded-5  TrendingNow-4"
                    style={{ fontSize: "0.9rem", backgroundColor: "#D9D5DE" }}
                  >
                    {trasnaltions[lang].TrendingNow}
                  </span>
                  <div className="mt-3">
                    <h1 className="fs-1 fw-bold">
                      {trasnaltions[lang].NewPCbuild}
                    </h1>
                    <p
                      className="text-muted Discoverourlatestarrivals w-75"
                      style={{ fontSize: "0.9rem", lineHeight: "1.7" }}
                    >
                      {trasnaltions[lang].Discoverourlatestarrivals}
                    </p>
                  </div>
                  <button
                    className="rounded-5 px-4 ExploreCollection"
                    style={{
                      color: "white",
                      backgroundColor: "#252223",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                    }}
                  >
                    {trasnaltions[lang].ExploreCollection}{" "}
                    <i className="fa-solid fa-arrow-right faarrowright"></i>
                  </button>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className=" ">
                    <img src={pcbuild} className="img-fluid pcbuild" alt="" />
                    <img src={tel} className="img-fluid tel" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row ">
              <div className="col-md-6 mt-1  div-Electronicsimg  ">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "#E6F4FF" }}
                >
                  <div className="row py-4 ">
                    <div className="col-md col-5  ms-2 ">
                      <h1 className="fs-5 fw-bold ">
                        {trasnaltions[lang].Electronics}
                      </h1>

                      <p className="text-muted">
                        {/* {عدد المنتجات} */} {trasnaltions[lang].productsnum}
                      </p>
                      <Link
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                        to=""
                      >
                        {trasnaltions[lang].ShopNow}{" "}
                        <i className="fa-solid fa-arrow-right faarrowright-2"></i>
                      </Link>
                    </div>
                    <div className="col-md col-5 ">
                      <div className="me-2">
                        <img
                          src={Electronicsimg}
                          style={{
                            height: "190px",
                            objectFit: "cover",
                            marginTop: "-40px",
                          }}
                          className="img-fluid Electronicsimg "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1  div-Electronicsimg  ">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "#FFF4E6" }}
                >
                  <div className="row py-4 ">
                    <div className="col-md col-5 ms-2 ">
                      <h1 className="fs-5 fw-bold ">
                        {trasnaltions[lang].Furniture}
                      </h1>

                      <p className="text-muted">
                        {/* {عدد المنتجات} */} {trasnaltions[lang].productsnum}
                      </p>
                      <Link
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                        to=""
                      >
                        {trasnaltions[lang].ShopNow}{" "}
                        <i className="fa-solid fa-arrow-right faarrowright-2"></i>
                      </Link>
                    </div>
                    <div className="col-md col-5">
                      <div className="me-2">
                        <img
                          src={Furnitureimg}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            marginTop: "-50px",
                          }}
                          className="img-fluid Electronicsimg "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1 div-Electronicsimg  ">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "#FFE6EB" }}
                >
                  <div className="row py-4 ">
                    <div className="col-md col-5 ms-2 ">
                      <h1 className="fs-5 fw-bold ">
                        {trasnaltions[lang].Clothing}
                      </h1>

                      <p className="text-muted">
                        {/* {عدد المنتجات} */} {trasnaltions[lang].productsnum}
                      </p>
                      <Link
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                        to=""
                      >
                        {trasnaltions[lang].ShopNow}{" "}
                        <i className="fa-solid fa-arrow-right faarrowright-2"></i>
                      </Link>
                    </div>
                    <div className="col-md col-5">
                      <div className="me-2">
                        <img
                          src={Clothingimg}
                          style={{
                            objectFit: "cover",
                          }}
                          className="img-fluid Electronicsimg "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-1  div-Electronicsimg  ">
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to=""
                >
                  <div
                    className="rounded-3"
                    style={{ backgroundColor: "#E6FFE8" }}
                  >
                    <div className="row py-4 ">
                      <div className="col-md col-5 ms-2 ">
                        <h1 className="fs-5 fw-bold ">
                          {trasnaltions[lang].Jewelry}
                        </h1>
                        <p className="text-muted">
                          {/* {عدد المنتجات} */} {trasnaltions[lang].products}
                        </p>
                        {trasnaltions[lang].ShopNow}{" "}
                        <i className="fa-solid fa-arrow-right faarrowright-2"></i>
                      </div>
                      <div className="col-md col-5">
                        <div className="me-2">
                          <img
                            src={Jewelry}
                            style={{
                              objectFit: "cover",
                              height: "130px",
                            }}
                            className="img-fluid Electronicsimg "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5  justify-content-center  ">
          <div className="col-md-12">
            <div className="text-center">
              <h1 className="fs-3 fw-bold">{trasnaltions[lang].BestSellers}</h1>
              <div
                className=""
                style={{
                  backgroundColor: "#252223",
                  height: "3px",
                  width: "5%",
                  margin: "auto",
                }}
              ></div>
              <p className="mt-3 text-muted">
                {trasnaltions[lang].Necessitatibus}
              </p>
            </div>
          </div>
          {/* المنتجات */}
          <div className="row justify-content-center mt-4">
            {((searchTerm && searchTerm.length > 0) ? filteredProducts : products).map((item) => (
              <div className="col-md-3 col-10 " key={item.id}>
                <div
                  className="card card-items  text-start"
                  style={{ border: "none", minHeight: "420px" }}
                >
                  <div
                    className="text-center"
                    style={{ backgroundColor: "#F8F8F8", height: "250px" }}
                  >
                    <img
                      src={item.img}
                      style={{ objectFit: "cover", minHeight: "250px" }}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="">
                      <span className="faheart" style={{ display: "block" }}>
                        <i className={item.faheart}></i>
                      </span>
                      <span
                        className="famagnifyingglassplus"
                        style={{ display: "block" }}
                      >
                        <i className={item.famagnifyingglassplus}></i>
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className=" rounded py-2 ADDTOCARD"
                    >
                      {trasnaltions[lang].ADDTOCARD}
                    </button>
                  </div>
                  <div className="ms-3 mt-4" style={{ lineHeight: "1" }}>
                    <h1 style={{ fontSize: "0.7rem" }} className=" text-muted">
                      {item.name}
                    </h1>
                    <p
                      style={{ fontSize: "0.8rem", lineHeight: "1.5" }}
                      className=" text-muted"
                    >
                      {item.paragraf}
                    </p>
                  </div>
                  <div className="ms-3 ">
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} filled={star <= item.rating} />
                      ))}
                    </div>

                    <p>
                      {coin === "USD" && "$"}
                      {coin === "QAR" && "﷼"}
                      {coin === "TRY" && "₺"}
                      {item.price}.00
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row  mt-5  justify-content-center ">
            <div className=" New New-1 col-md-4 mt-3">
              <div
                className="p-4  "
                style={{ backgroundColor: "rgb(251, 251, 251)" }}
              >
                <h1 className="fs-6">
                  <i className="fa-solid fa-fire-flame-simple "></i>{" "}
                  {trasnaltions[lang].TrendingNow}
                </h1>
                <div
                  className=""
                  style={{
                    backgroundColor: "rgb(37, 34, 35)",
                    height: "2px",
                    width: "20%",
                  }}
                ></div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-1.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                      <span
                        className="px-2"
                        style={{
                          backgroundColor: "hsl(300, 1%, 90%)",
                          fontSize: "0.7rem",
                          position: "relative",
                          top: "-70px",
                        }}
                      >
                        {trasnaltions[lang].New}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].PremiumLeatherTote}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New1}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3  mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-3.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].StatementEarrings}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3  mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-5.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].OrganicCottonShirt}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" New New-2 col-md-4 mt-3">
              <div
                className="p-4"
                style={{ backgroundColor: "rgb(251, 251, 251)" }}
              >
                <h1 className="fs-6">
                  <i className="fa-solid fa-fire-flame-simple "></i>{" "}
                  {trasnaltions[lang].BestSellers}
                </h1>
                <div
                  className=""
                  style={{
                    backgroundColor: "rgb(37, 34, 35)",
                    height: "2px",
                    width: "20%",
                  }}
                ></div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-1.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                      <span
                        className="px-2"
                        style={{
                          backgroundColor: "hsl(300, 1%, 90%)",
                          fontSize: "0.7rem",
                          position: "relative",
                          top: "-70px",
                        }}
                      >
                        {trasnaltions[lang].New}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].PremiumLeatherTote}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New1}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-3.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].StatementEarrings}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-5.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].OrganicCottonShirt}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" New New-3 col-md-4 mt-3">
              <div
                className="p-4"
                style={{ backgroundColor: "rgb(251, 251, 251)" }}
              >
                <h1 className="fs-6">
                  <i className="fa-solid fa-fire-flame-simple "></i>{" "}
                  {trasnaltions[lang].FeaturedItems}
                </h1>
                <div
                  className=""
                  style={{
                    backgroundColor: "rgb(37, 34, 35)",
                    height: "2px",
                    width: "20%",
                  }}
                ></div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-1.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                      <span
                        className="px-2"
                        style={{
                          backgroundColor: "hsl(300, 1%, 90%)",
                          fontSize: "0.7rem",
                          position: "relative",
                          top: "-70px",
                        }}
                      >
                        {trasnaltions[lang].New}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].PremiumLeatherTote}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New1}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-3.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].StatementEarrings}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row NewItem">
                  <div className="col-md-3 col-3 mt-3">
                    <div className="">
                      <img
                        src={
                          "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-5.webp"
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-9 mt-3">
                    <div className="">
                      <div className="" style={{ lineHeight: "0.3" }}>
                        <h1 className="fs-6">
                          {trasnaltions[lang].OrganicCottonShirt}
                        </h1>
                        <span style={{ fontSize: "0.6rem" }}>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                          <i
                            style={{ color: "hsl(45, 100%, 51%)" }}
                            className="fa-solid fa-star"
                          ></i>
                        </span>
                      </div>
                      <p>
                        {" "}
                        {coin === "USD" && "$"}
                        {coin === "QAR" && "﷼"}
                        {coin === "TRY" && "₺"}
                        {Currency[coin].New3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid   pt-5">
        <div className="row justify-content-center">
          <div
            className="col-md-5"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div className="text-center">
              <span
                className="text-white px-4 py-2 rounded-5"
                style={{ backgroundColor: "#221F20" }}
              >
                {" "}
                <span className="text-muted">
                  {trasnaltions[lang].Limited}
                </span>{" "}
                <span>{trasnaltions[lang].off}</span>
              </span>
              <h1 style={{ fontSize: "3.3rem" }} className="fw-bold mt-3 ">
                {trasnaltions[lang].ExclusiveFlashSale}
              </h1>
              <p style={{ fontSize: "0.8rem" }} className="mt-3 text-muted">
                {trasnaltions[lang].Don}
              </p>
              <div
                style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
                className="row  justify-content-center"
              >
                <div className="col-md   ">
                  <div
                    className="border border-2 py-3 rounded-3"
                    style={{ backgroundColor: "#FEFEFE" }}
                  >
                    <div className="" style={{ lineHeight: "0.6" }}>
                      <p className="fw-bold fs-1">{timeLeft.days}</p>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "0.7rem", opacity: "0.30" }}
                      >
                        {trasnaltions[lang].Days}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md  ">
                  <div
                    className="border border-2 py-3 rounded-3"
                    style={{ backgroundColor: "#FEFEFE" }}
                  >
                    <div className="" style={{ lineHeight: "0.6" }}>
                      <p className="fw-bold fs-1">{timeLeft.hours}</p>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "0.7rem", opacity: "0.30" }}
                      >
                        {trasnaltions[lang].Hours}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md  ">
                  <div
                    className="border border-2 py-3 rounded-3"
                    style={{ backgroundColor: "#FEFEFE" }}
                  >
                    <div className="" style={{ lineHeight: "0.6" }}>
                      <p className="fw-bold fs-1">{timeLeft.minutes}</p>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "0.7rem", opacity: "0.30" }}
                      >
                        {trasnaltions[lang].Minutes}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md  ">
                  <div
                    className="border border-2 py-3 rounded-3"
                    style={{ backgroundColor: "#FEFEFE" }}
                  >
                    <div className="" style={{ lineHeight: "0.6" }}>
                      <p className="fw-bold fs-1">{timeLeft.seconds}</p>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "0.7rem", opacity: "0.30" }}
                      >
                        {trasnaltions[lang].Seconds}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
