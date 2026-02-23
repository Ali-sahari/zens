import { useContext , useEffect , useState } from "react";
import { LangContext , CartContext } from "../CartContext";
import { Link } from "react-router-dom";

export default function ProductDetails(){
  const { lang, trasnaltions , coin , Currency} = useContext(LangContext);
  const {products , cart , addToCart , totalPrice , totalItems} =useContext(CartContext)


return(
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
              <h1 className="fs-5">{trasnaltions[lang].ProductDetails}</h1>
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
                  {trasnaltions[lang].ProductDetails}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
        </div>
      </div>
    </>
)  
}