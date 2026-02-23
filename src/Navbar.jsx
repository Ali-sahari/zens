import { Link, useNavigate } from "react-router-dom";
import logo2 from "./assets/logo2.png";
import { useContext, useState, useRef } from "react";
import { LangContext, CartContext } from "./CartContext";
import "./css/Nav.css";
export default function Navbar() {
  const navigate = useNavigate();
  const { lang, trasnaltions, setLang, coin, setCoin, Currency } =
    useContext(LangContext);

  // const [filteR, setFilteR] = useState("Description");
  const [showCart, setShowCart] = useState(false);
  const {
    cart,
    totalPrice,
    updateQuantity,
    totalItems,
    removeFromCart,
    products,
    productscategory,
     searchTerm,
        setSearchTerm,
        filteredProducts,
  } = useContext(CartContext);
  const cartRef = useRef(null);

  // إغلاق القائمة المنبثقة عند النقر خارجها
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cartRef.current && !cartRef.current.contains(event.target)) {
  //       setShowCart(false);
  //     }
  //   };

  //   if (showCart) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showCart]);
  const [navcheng, setNavcheng] = useState("navFeatured");
  const [navcheng2, setNavcheng2] = useState("WOMEN");  
  return (
    <>
      <div className="fixed-top">
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: "#F8F8F8" }}>
            <div className="row justify-content-center">
              <div className="col-md-5 d-none d-sm-inline">
                <p className="Needhelp" style={{ fontSize: "0.8rem" }}>
                  <i className="fa-solid fa-phone"></i>{" "}
                  {trasnaltions[lang].Needhelp}
                </p>
              </div>
              <div className="col-md-3 col-12 text-center">
                <div className="freee">
                  <p className="free free1">{trasnaltions[lang].free1}</p>
                  <p className="free free2">{trasnaltions[lang].free2}</p>
                  <p className="free free3">{trasnaltions[lang].free3}</p>
                </div>
              </div>
              <div className="col-md-3 text-end col-5 d-none d-sm-inline d-flex">
                <div className="header-top-price">
                  <span className="blue-box-price-select text-dark">
                    {coin}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </span>
                  <ul className="text-center">
                    <li
                      className="border-bootom"
                      onClick={() => setCoin("QAR")}
                    >
                      QAR
                    </li>
                    <li
                      className="border-bootom"
                      onClick={() => setCoin("USD")}
                    >
                      USD
                    </li>
                    <li
                      className="border-bootom"
                      onClick={() => setCoin("TRY")}
                    >
                      TRY
                    </li>
                  </ul>
                </div>
                <div className="header-lang">
                  <span className="header-lang-select text-dark">
                    {lang.toUpperCase()}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </span>
                  <ul className="header-lang-submenu text-center">
                    <li className="border-bootom" onClick={() => setLang("en")}>
                      English
                    </li>
                    <li className="border-bootom" onClick={() => setLang("ar")}>
                      العربية
                    </li>
                    <li className="border-bootom" onClick={() => setLang("tr")}>
                      Türkçe
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="navbar  navbar-expand-lg  "
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            {/* <a href="#" className="navbar-brand ">logo</a> */}
            {/*مقاس الهاتف  */}
            <div className="d-flex d-sm-none justify-content-between align-items-center w-100 ">
              <img
                src={logo2}
                style={{ width: "100px" }}
                className="img-fluid"
                alt="logo"
              />
              <div
                style={{ marginLeft: "140px" }}
                className="d-flex gap-2  justify-content-end"
              >
                <Link>
                  <i className=" text-dark fa-regular fa-user fa-lg"></i>
                </Link>
                <Link>
                  <i className=" text-dark fa-regular fa-heart fa-lg"></i>
                </Link>
                <div style={{ position: "relative" }} ref={cartRef}>
                  <button
                    onClick={() => setShowCart(!showCart)}
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <i className=" text-dark fa-solid fa-cart-shopping fa-lg"></i>
                    {totalItems > 0 && (
                      <span
                        className="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle border rounded-circle"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </button>

                  {/* قائمة السلة المنبثقة للهاتف */}
                  {showCart && (
                    <div
                      className="position-fixed bg-white shadow-lg rounded p-3"
                      style={{
                        top: "80px",
                        right: "10px",
                        left: "10px",
                        maxHeight: "70vh",
                        overflowY: "auto",
                        zIndex: 1000,
                        border: "1px solid #ddd",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">
                          {trasnaltions[lang].Cart} ({totalItems})
                        </h5>
                        <button
                          onClick={() => setShowCart(false)}
                          className="btn-close"
                          style={{ fontSize: "0.8rem" }}
                        ></button>
                      </div>

                      {cart.length === 0 ? (
                        <p className="text-muted text-center py-4">
                          {trasnaltions[lang].Thecartisempty}
                        </p>
                      ) : (
                        <>
                          <div className="cart-items">
                            {cart.map((item) => (
                              <div
                                key={item.id}
                                className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom"
                              >
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                  }}
                                />
                                <div className="flex-grow-1">
                                  <h6
                                    className="mb-1"
                                    style={{ fontSize: "0.9rem" }}
                                  >
                                    {item.name}
                                  </h6>
                                  <p
                                    className="mb-1 text-muted"
                                    style={{ fontSize: "0.8rem" }}
                                  >
                                    {coin === "USD" && "$"}
                                    {coin === "QAR" && "﷼"}
                                    {coin === "TRY" && "₺"}
                                    {item.price} × {item.quantity}
                                  </p>
                                  <div className="d-flex align-items-center gap-2">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity - 1,
                                        )
                                      }
                                      className="btn btn-sm btn-outline-secondary"
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        padding: 0,
                                        fontSize: "0.8rem",
                                      }}
                                    >
                                      -
                                    </button>
                                    <span
                                      style={{
                                        minWidth: "30px",
                                        textAlign: "center",
                                      }}
                                    >
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity + 1,
                                        )
                                      }
                                      className="btn btn-sm btn-outline-secondary"
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        padding: 0,
                                        fontSize: "0.8rem",
                                      }}
                                    >
                                      +
                                    </button>
                                    <button
                                      onClick={() => removeFromCart(item.id)}
                                      className="btn btn-sm btn-outline-danger ms-2"
                                      style={{ fontSize: "0.7rem" }}
                                    >
                                      <i className="fa-solid fa-trash"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="border-top pt-3">
                            <div className="d-flex justify-content-between mb-3">
                              <strong>{trasnaltions[lang].Total}:</strong>
                              <strong>
                                {coin === "USD" && "$"}
                                {coin === "QAR" && "﷼"}
                                {coin === "TRY" && "₺"}
                                {totalPrice.toFixed(2)}
                              </strong>
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <Link to="/Cart">
                                  <button
                                    className="btn btn-dark w-100"
                                    onClick={() => setShowCart(false)}
                                  >
                                    {trasnaltions[lang].ViewCart}
                                  </button>
                                </Link>
                              </div>
                              <div className="col-md-6 col-6">
                                <Link to="/Checkout">
                                  <button
                                    className="btn btn-dark w-100"
                                    onClick={() => setShowCart(false)}
                                  >
                                    {trasnaltions[lang].ViewCheckout}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarnav"
                aria-controls="navbarnav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
            </div>

            <div
              className="offcanvas offcanvas-end custom-offcanvas "
              tabIndex="-1"
              id="navbarnav"
            >
              <div className="offcanvas-header d-flex d-sm-none">
                <ul className="navbar-nav gap-2">
                  <li className="nav-item">
                    <Link className="nav-link fw-bold fs-5" to="">
                      {trasnaltions[lang].Home}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold fs-5" to="/About">
                      {trasnaltions[lang].About}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold fs-5" to="/Category">
                      {trasnaltions[lang].Category}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link fw-bold  fs-5" to="">
                      {trasnaltions[lang].Contact}
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  style={{ position: "relative", top: "-90px" }}
                ></button>
              </div>
              <div className="row d-none d-sm-flex pt-3 px-5">
                <div className="col-md-4">
                  <div className="">
                    <img
                      src={logo2}
                      style={{ width: "200px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
               <div className="col-md-4">
    <div className="text-center shadow-sm rounded input-group">
      <input
        type="text"
        placeholder={trasnaltions[lang]?.Searchproducts || "Search products..."}
        className="w-100 px-2 sechinput"      
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         
      />
    </div>
    <button
      className="sechinputbtn px-3 rounded py-1"
      style={{ border: "none", backgroundColor: "#252223 " }}
              onClick={() => navigate("/Category")}
            >
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
                <div className="col-md-4 ">
                  <div className="d-flex gap-3 justify-content-end">
                    <Link>
                      <i className=" text-dark fa-regular fa-user fa-lg"></i>
                    </Link>
                    <Link>
                      <i className=" text-dark fa-regular fa-heart fa-lg"></i>
                    </Link>
                    <div style={{ position: "relative" }} ref={cartRef}>
                      <button
                        onClick={() => setShowCart(!showCart)}
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        <i className=" text-dark fa-solid fa-cart-shopping fa-lg"></i>
                        {totalItems > 0 && (
                          <span
                            className="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle border rounded-circle"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {totalItems}
                          </span>
                        )}
                      </button>

                      {/* قائمة السلة المنبثقة */}
                      {showCart && (
                        <div
                          className="position-absolute bg-white shadow-lg rounded p-3"
                          style={{
                            top: "100%",
                            right: 0,
                            width: "350px",
                            maxHeight: "500px",
                            overflowY: "auto",
                            zIndex: 1000,
                            marginTop: "10px",
                            border: "1px solid #ddd",
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">
                              {trasnaltions[lang].Cart} ({totalItems})
                            </h5>
                            <button
                              onClick={() => setShowCart(false)}
                              className="btn-close"
                              style={{ fontSize: "0.8rem" }}
                            ></button>
                          </div>

                          {cart.length === 0 ? (
                            <p className="text-muted text-center py-4">
                              {trasnaltions[lang].Thecartisempty}
                            </p>
                          ) : (
                            <>
                              <div
                                className="cart-items"
                                style={{
                                  height: "200px",
                                  overflowY: "scroll",
                                  scrollbarWidth: "none",
                                  msOverflowStyle: "none",
                                }}
                              >
                                {cart.map((item) => (
                                  <div
                                    key={item.id}
                                    className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom"
                                  >
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      style={{
                                        width: "60px",
                                        height: "60px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                      }}
                                    />
                                    <div className="flex-grow-1">
                                      <h6
                                        className="mb-1"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        {item.name}
                                      </h6>
                                      <p
                                        className="mb-1 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                      >
                                        {coin === "USD" && "$"}
                                        {coin === "QAR" && "﷼"}
                                        {coin === "TRY" && "₺"}
                                        {item.price} × {item.quantity}
                                      </p>
                                      <div className="d-flex align-items-center gap-2">
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              item.quantity - 1,
                                            )
                                          }
                                          className="btn btn-sm btn-outline-secondary"
                                          style={{
                                            width: "25px",
                                            height: "25px",
                                            padding: 0,
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          -
                                        </button>
                                        <span
                                          style={{
                                            minWidth: "30px",
                                            textAlign: "center",
                                          }}
                                        >
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              item.quantity + 1,
                                            )
                                          }
                                          className="btn btn-sm btn-outline-secondary"
                                          style={{
                                            width: "25px",
                                            height: "25px",
                                            padding: 0,
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          +
                                        </button>
                                        <button
                                          onClick={() =>
                                            removeFromCart(item.id)
                                          }
                                          className="btn btn-sm btn-outline-danger ms-2"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          <i className="fa-solid fa-trash"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="border-top pt-3">
                                <div className="d-flex justify-content-between mb-3">
                                  <strong>{trasnaltions[lang].Total}:</strong>
                                  <strong>
                                    {coin === "USD" && "$"}
                                    {coin === "QAR" && "﷼"}
                                    {coin === "TRY" && "₺"}
                                    {totalPrice.toFixed(2)}
                                  </strong>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <Link to="/Cart">
                                      <button
                                        className="btn btn-dark w-100"
                                        onClick={() => setShowCart(false)}
                                      >
                                        {trasnaltions[lang].ViewCart}
                                      </button>
                                    </Link>
                                  </div>
                                  <div className="col-md-6">
                                    <Link to="/Checkout">
                                      <button
                                        className="btn btn-dark w-100"
                                        onClick={() => setShowCart(false)}
                                      >
                                        {trasnaltions[lang].ViewCheckout}
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas-body ms-5 px-5 d-none d-sm-inline position-relative">
                <ul className="navbar-nav gap-2">
                  <li className="nav-item">
                    <Link className="nav-link " to="/">
                      {trasnaltions[lang].Home}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/About">
                      {trasnaltions[lang].About}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/Category">
                      {trasnaltions[lang].Category}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/Contact">
                      {trasnaltions[lang].Contact}
                    </Link>
                  </li>
                  <li className="nav-item Megamenu">
                    <Link className="nav-link ">
                      {trasnaltions[lang].Megamenu}
                      <i class="fa-solid fa-chevron-down"></i>
                    </Link>

                    <div className="container container-Megamenu  ">
                      <div className="row ">
                        <div
                          className="position-absolute  bg-white  shadow  p-2 "
                          style={{
                            top: "100%",
                            zIndex: 1000,
                            width: "90%",
                            left: "50px",
                          }}
                        >
                          <div className="">
                            <button
                              onClick={() => setNavcheng("navFeatured")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight:
                                  navcheng === "navFeatured" && "bold",
                              }}
                            >
                              {trasnaltions[lang].navFeatured}
                            </button>
                            <button
                              onClick={() => setNavcheng("navNewArrivals")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight:
                                  navcheng === "navNewArrivals" && "bold",
                              }}
                            >
                              {trasnaltions[lang].navNewArrivals}
                            </button>
                            <button
                              onClick={() => setNavcheng("navSale")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight: navcheng === "navSale" && "bold",
                              }}
                            >
                              {trasnaltions[lang].navSale}
                            </button>
                            <button
                              onClick={() => setNavcheng("navCategories")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight:
                                  navcheng === "navCategories" && "bold",
                              }}
                            >
                              {trasnaltions[lang].navCategories}
                            </button>
                          </div>
                          <hr />
                          <div className="">
                            {navcheng === "navFeatured" && (
                              <>
                                <div className="row justify-content-center mt-4">
                                  {products.map((item) => (
                                    <div
                                      className="col-md-3 col-10 "
                                      key={item.id}
                                    >
                                      <div
                                        className="card card-items  text-start"
                                        style={{
                                          border: "none",
                                          minHeight: "250px",
                                        }}
                                      >
                                        <div
                                          className="text-center"
                                          style={{
                                            backgroundColor: "#F8F8F8",
                                            height: "250px",
                                          }}
                                        >
                                          <img
                                            src={item.img}
                                            style={{
                                              objectFit: "cover",
                                              minHeight: "250px",
                                            }}
                                            className="img-fluid"
                                            alt=""
                                          />
                                          <div className="">
                                            <span
                                              className="faheart"
                                              style={{ display: "block" }}
                                            >
                                              <i className={item.faheart}></i>
                                            </span>
                                            <span
                                              className="famagnifyingglassplus"
                                              style={{ display: "block" }}
                                            >
                                              <i
                                                className={
                                                  item.famagnifyingglassplus
                                                }
                                              ></i>
                                            </span>
                                          </div>
                                          <button className=" rounded py-2 ADDTOCARD">
                                            View Product
                                          </button>
                                        </div>
                                        <div
                                          className="ms-3 "
                                          style={{ lineHeight: "1" }}
                                        >
                                          <h1
                                            style={{ fontSize: "0.5rem" }}
                                            className=" text-muted"
                                          >
                                            {item.name}
                                          </h1>
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              lineHeight: "1.5",
                                            }}
                                            className=" text-muted"
                                          >
                                            {item.paragraf}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                            {navcheng === "navNewArrivals" && (
                              <>
                                <div className="row justify-content-center mt-4">
                                  {productscategory
                                    .filter((item) =>
                                      [5, 6, 7].includes(item.id),
                                    ) // سيختار فقط المنتجات بهذه الأرقام
                                    .map((item) => (
                                      <div
                                        className="col-md-3 col-10 "
                                        key={item.id}
                                      >
                                        <div
                                          className="card card-items  text-start"
                                          style={{
                                            border: "none",
                                            minHeight: "250px",
                                          }}
                                        >
                                          <div
                                            className="text-center"
                                            style={{
                                              backgroundColor: "#F8F8F8",
                                              height: "250px",
                                            }}
                                          >
                                            <img
                                              src={item.img}
                                              style={{
                                                objectFit: "cover",
                                                minHeight: "250px",
                                              }}
                                              className="img-fluid"
                                              alt=""
                                            />
                                            <div className="">
                                              <span
                                                className="faheart"
                                                style={{ display: "block" }}
                                              >
                                                <i className={item.faheart}></i>
                                              </span>
                                              <span
                                                className="famagnifyingglassplus"
                                                style={{ display: "block" }}
                                              >
                                                <i
                                                  className={
                                                    item.famagnifyingglassplus
                                                  }
                                                ></i>
                                              </span>
                                            </div>
                                            <button className=" rounded py-2 ADDTOCARD">
                                              View Product
                                            </button>
                                          </div>
                                          <div
                                            className="ms-3 "
                                            style={{ lineHeight: "1" }}
                                          >
                                            <h1
                                              style={{ fontSize: "0.5rem" }}
                                              className=" text-muted"
                                            >
                                              {item.name}
                                            </h1>
                                            <p
                                              style={{
                                                fontSize: "0.8rem",
                                                lineHeight: "1.5",
                                              }}
                                              className=" text-muted"
                                            >
                                              {item.paragraf}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </>
                            )}
                            {navcheng === "navSale" && (
                              <div className="row justify-content-center mt-4">
                                {productscategory
                                  .filter((item) =>
                                    [1, 2, 7, 3].includes(item.id),
                                  ) // سيختار فقط المنتجات بهذه الأرقام
                                  .map((item) => (
                                    <div
                                      className="col-md-3 col-10 "
                                      key={item.id}
                                    >
                                      <div
                                        className="card card-items  text-start"
                                        style={{
                                          border: "none",
                                          minHeight: "250px",
                                        }}
                                      >
                                        <div
                                          className="text-center"
                                          style={{
                                            backgroundColor: "#F8F8F8",
                                            height: "250px",
                                          }}
                                        >
                                          <img
                                            src={item.img}
                                            style={{
                                              objectFit: "cover",
                                              minHeight: "250px",
                                            }}
                                            className="img-fluid"
                                            alt=""
                                          />
                                          <div className="">
                                            <span
                                              className="faheart"
                                              style={{ display: "block" }}
                                            >
                                              <i className={item.faheart}></i>
                                            </span>
                                            <span
                                              className="famagnifyingglassplus"
                                              style={{ display: "block" }}
                                            >
                                              <i
                                                className={
                                                  item.famagnifyingglassplus
                                                }
                                              ></i>
                                            </span>
                                          </div>
                                          <button className=" rounded py-2 ADDTOCARD">
                                            View Product
                                          </button>
                                        </div>
                                        <div
                                          className="ms-3 "
                                          style={{ lineHeight: "1" }}
                                        >
                                          <h1
                                            style={{ fontSize: "0.5rem" }}
                                            className=" text-muted"
                                          >
                                            {item.name}
                                          </h1>
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              lineHeight: "1.5",
                                            }}
                                            className=" text-muted"
                                          >
                                            {item.paragraf}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            )}
                            {navcheng === "navCategories" && (
                              <>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div
                                        className="py-2 px-2"
                                        style={{ backgroundColor: "#F8F8F8" }}
                                      >
                                        <h1 className="fs-5">{trasnaltions[lang].Clothing}</h1>
                                        <hr />
                                       <div style={{lineHeight:"0.5"}} className="">
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].MensWear}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].WomensWear}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].KidsCollection}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Sportswear}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Accessories}</p></div>
                                      </div>
                                    </div>
                                     <div className="col-md-3">
                                      <div className="py-2 px-2"
                                        style={{ backgroundColor: "#F8F8F8" }}
                                      >
                                        <h1 className="fs-5">{trasnaltions[lang].Electronics}</h1>
                                        <hr />
                                       <div style={{lineHeight:"0.5"}} className="">
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Smartphones}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Laptops}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].AudioDevices}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].SmartHome}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Accessories}</p></div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="py-2 px-2"
                                        style={{ backgroundColor: "#F8F8F8" }}
                                      >
                                        <h1 className="fs-5">{trasnaltions[lang].HomeLiving}</h1>
                                        <hr />
                                       <div style={{lineHeight:"0.5"}} className="">
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Furniture}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Decor}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Kitchen}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Bedding}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Lighting}</p></div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="py-2 px-2"
                                        style={{ backgroundColor: "#F8F8F8" }}
                                      >
                                        <h1 className="fs-5">{trasnaltions[lang].Beauty}</h1>
                                        <hr />
                                       <div style={{lineHeight:"0.5"}} className="">
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Skincare}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Makeup}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Haircare}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].Fragrances}</p>
                                        <p style={{cursor:"pointer"}}><i class="fa-solid fa-chevron-right"></i> {trasnaltions[lang].PersonalCare}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="nav-item Megamenu2">
                    <Link className="nav-link ">
                      {trasnaltions[lang].Megamenu2}
                      <i class="fa-solid fa-chevron-down"></i>
                    </Link>

                    <div className="container container-Megamenu2  ">
                      <div className="row ">
                        <div
                          className="position-absolute  bg-white  shadow  p-2 "
                          style={{
                            top: "100%",
                            zIndex: 1000,
                            width: "90%",
                            left: "50px",
                          }}
                        >
                          <div className="">
                            <button
                              onClick={() => setNavcheng2("WOMEN")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight:
                                navcheng2 === "WOMEN" && "bold",
                              }}
                            >
                              {trasnaltions[lang].WOMEN}
                            </button>
                            <button
                              onClick={() => setNavcheng2("MEN")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight:
                                  navcheng2 === "MEN" && "bold",
                              }}
                            >
                              {trasnaltions[lang].MEN}
                            </button>
                            <button
                              onClick={() => setNavcheng2("KIDS")}
                              className="me-4"
                              style={{
                                background: "none",
                                border: "none",
                                fontWeight: navcheng2 === "KIDS" && "bold",
                              }}
                            >
                              {trasnaltions[lang].KIDS}
                            </button>
                          </div>
                          <hr />
                          <div className="">
                            {navcheng2 === "WOMEN" && (
                              <>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Clothing}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].ShirtsTops}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].CoatsOuterwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Underwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sweatshirts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Dresses}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Swimwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Shoes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Boots}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sandals}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Heels}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Loafers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Slippers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Oxfords}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Accessories}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Handbags}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Eyewear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Hats}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Watches}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Jewelry}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Belts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].SpecialtySizes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].PlusSize}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Petite}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].WideShoes}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].NarrowShoes}</p>                               
                              </div>
                                </div>
                              </div>
                            </div>
                              </>
                            )}
                            {navcheng2 === "MEN" && (
                              <>
                              <div className="container">
                              <div className="row">
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Clothing}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].ShirtsTops}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].CoatsOuterwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Underwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sweatshirts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Dresses}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Swimwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Shoes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Boots}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sandals}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Heels}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Loafers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Slippers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Oxfords}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Accessories}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Handbags}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Eyewear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Hats}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Watches}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Jewelry}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Belts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].SpecialtySizes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].PlusSize}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Petite}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].WideShoes}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].NarrowShoes}</p>                               
                              </div>
                                </div>
                              </div>
                            </div>
                              </>
                            )}
                            {navcheng2 === "KIDS" && (
                           <>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Clothing}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].ShirtsTops}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].CoatsOuterwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Underwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sweatshirts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Dresses}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Swimwear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Shoes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Boots}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Sandals}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Heels}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Loafers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Slippers}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Oxfords}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].Accessories}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Handbags}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Eyewear}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Hats}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Watches}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Jewelry}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Belts}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Viewall}</p>
                              </div>
                                </div>
                                 <div className="col-md-3">
                                  <h1 className="fs-5">{trasnaltions[lang].SpecialtySizes}</h1>
                              <hr />
                              <div style={{lineHeight:"1"}} className="">
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].PlusSize}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].Petite}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].WideShoes}</p>
                               <p style={{cursor:"pointer"}} className="text-muted">{trasnaltions[lang].NarrowShoes}</p>                               
                              </div>
                                </div>
                              </div>
                            </div>
                           </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row"></div>
      </div>
    </>
  );
}
