import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LangContext, CartContext } from "./CartContext";

export default function Category() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const { lang, trasnaltions, coin, Currency } = useContext(LangContext);
  const [selectedCategory, setselectedCategory] = useState(null);
  const { productscategory, addToCart, searchTerm } = useContext(CartContext);
  const Star = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        pathLength="360"
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      />
    </svg>
  );
  const filteredProducts = productscategory.filter((item) => {
    const priceMatch =
      item.price >= priceRange[0] && item.price <= priceRange[1];

    const categoryMatch = selectedCategory
      ? item.selectedCategory === selectedCategory
      : true;

    const searchMatch = searchTerm
      ? ("" + (item.name || "") + " " + (item.paragraf || "")).toLowerCase().includes(
          searchTerm.toLowerCase(),
        )
      : true;

    return priceMatch && categoryMatch && searchMatch;
  });

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
              <h1 className="fs-5">{trasnaltions[lang].Category}</h1>
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
                  to="/Category"
                >
                  {trasnaltions[lang].Category}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div
              className="p-3 rounded-3"
              style={{
                backgroundColor: "#FBFBFB",
                border: "solid #E9E9E9 1px",
              }}
            >
              {trasnaltions[lang].Categories}

              <div className="col-md-12 mt-3">
                <div
                  className="accordion "
                  style={{ borderBottom: "#E8E8E8 solid 1.4px" }}
                >
                  <div className="accordion-item">
                    <div className="accordion-header ">
                      <button
                        className="accordion-button "
                        data-bs-toggle="collapse"
                        data-bs-target="#episode-1-body"
                        style={{ backgroundColor: "#FBFBFB" }}
                      >
                        <span className="text-dark fw-bold ">
                          {trasnaltions[lang].Electronics}
                        </span>
                      </button>
                      <div
                        style={{ backgroundColor: "#FBFBFB" }}
                        className="accordion-collapse collapse "
                        id="episode-1-body"
                      >
                        <div
                          className="accordion-body"
                          style={{ marginTop: "-15px", lineHeight: "3" }}
                        >
                          <button
                            onClick={() =>
                              setselectedCategory("MobilePhonesandAccessories")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                            }}
                          >
                            {trasnaltions[lang].MobilePhonesandAccessories}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("ComputersandLaptops")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                            }}
                          >
                            {trasnaltions[lang].ComputersandLaptops}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("HeadphonesandAudioDevices")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                            }}
                          >
                            {trasnaltions[lang].HeadphonesandAudioDevices}
                          </button>
                          <button
                            onClick={() => setselectedCategory("SmartDevices")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                            }}
                          >
                            {trasnaltions[lang].SmartDevices}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion "
                  style={{ borderBottom: "#E8E8E8 solid 1.4px" }}
                >
                  <div className="accordion-item">
                    <div className="accordion-header ">
                      <button
                        className="accordion-button "
                        data-bs-toggle="collapse"
                        data-bs-target="#episode-2-body"
                        style={{ backgroundColor: "#FBFBFB" }}
                      >
                        <span className="text-dark fw-bold ">
                          {trasnaltions[lang].Furniture}
                        </span>
                      </button>
                      <div
                        style={{ backgroundColor: "#FBFBFB" }}
                        className="accordion-collapse collapse "
                        id="episode-2-body"
                      >
                        <div
                          className="accordion-body"
                          style={{ marginTop: "-15px", lineHeight: "3" }}
                        >
                          <button
                            onClick={() => setselectedCategory("Bedrooms")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Bedrooms}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("Sofasandseating")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Sofasandseating}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory(
                                "Kitchensandhouseholdappliances"
                              )
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Kitchensandhouseholdappliances}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("Decorandlighting")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Decorandlighting}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion "
                  style={{ borderBottom: "#E8E8E8 solid 1.4px" }}
                >
                  <div className="accordion-item">
                    <div className="accordion-header ">
                      <button
                        className="accordion-button "
                        data-bs-toggle="collapse"
                        data-bs-target="#episode-3-body"
                        style={{ backgroundColor: "#FBFBFB" }}
                      >
                        <span className="text-dark fw-bold ">
                          {trasnaltions[lang].Clothing}
                        </span>
                      </button>
                      <div
                        style={{ backgroundColor: "#FBFBFB" }}
                        className="accordion-collapse collapse "
                        id="episode-3-body"
                      >
                        <div
                          className="accordion-body"
                          style={{ marginTop: "-15px", lineHeight: "3" }}
                        >
                          <button
                            onClick={() => setselectedCategory("MensClothing")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].MensClothing}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("ChildrensClothing")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].ChildrensClothing}
                          </button>
                          <button
                            onClick={() => setselectedCategory("Shoes")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Shoes}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("ClothingAccessories")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].ClothingAccessories}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <div className="accordion-header ">
                      <button
                        className="accordion-button "
                        data-bs-toggle="collapse"
                        data-bs-target="#episode-4-body"
                        style={{ backgroundColor: "#FBFBFB" }}
                      >
                        <span className="text-dark fw-bold ">
                          {trasnaltions[lang].Jewelry}
                        </span>
                      </button>
                      <div
                        style={{ backgroundColor: "#FBFBFB" }}
                        className="accordion-collapse collapse "
                        id="episode-4-body"
                      >
                        <div
                          className="accordion-body"
                          style={{ marginTop: "-15px", lineHeight: "3" }}
                        >
                          <button
                            onClick={() => setselectedCategory("MensRings")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].MensRings}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("BraceletsandNecklaces")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].BraceletsandNecklaces}
                          </button>
                          <button
                            onClick={() => setselectedCategory("Watches")}
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].Watches}
                          </button>
                          <button
                            onClick={() =>
                              setselectedCategory("MetalAccessories")
                            }
                            style={{
                              border: "none",
                              color: "#686868",
                              background: "none",
                              display: "block",
                            }}
                          >
                            {trasnaltions[lang].MetalAccessories}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-3 rounded-3 mt-5"
              style={{
                backgroundColor: "#FBFBFB",
                border: "solid #E9E9E9 1px",
              }}
            >
              <h1 className="fw-bold fs-6 ">{trasnaltions[lang].PriceRange}</h1>
              <div className="row">
                <div className="col-md-10">${priceRange[0]}</div>
                <div className="col-md-2">${priceRange[1]}</div>
              </div>
              <input
                className="bg-danger"
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                style={{ width: "100%", accentColor: "#1a1a1a" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              {filteredProducts.map((item) => (
                <div className="col-md-4 col-10 tra" key={item.id}>
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
                      <h1
                        style={{ fontSize: "0.7rem" }}
                        className=" text-muted"
                      >
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
          </div>
        </div>
      </div>
    </>
  );
}
