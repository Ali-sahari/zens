import { useContext } from "react";
import { LangContext } from "./CartContext";
import { Link } from "react-router-dom";
export default function Contact() {
  const { lang, trasnaltions } = useContext(LangContext);

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
              <h1 className="fs-5">{trasnaltions[lang].Contact}</h1>
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
                  to="/Contact"
                >
                  {trasnaltions[lang].Contact}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md mt-4">
            <div className="shadow p-3 rounded-3">
              <div className="row">
                <div className="col-md-2 col-2">
                  <span
                    style={{
                      backgroundColor: "#E9E8E9",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <i className="fa-solid mt-3 fa-location-dot"></i>
                  </span>
                </div>
                <div className="col-md-10 col-10">
                  <div className="">
                    <h1 className="fs-6 fw-bold">
                      {trasnaltions[lang].OurAddress}
                    </h1>
                    <p className="text-muted" style={{ fontSize: "0.82rem" }}>
                      {trasnaltions[lang].Maple}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md mt-4">
            <div className="shadow p-3 rounded-3">
              <div className="row">
                <div className="col-md-2 col-2">
                  <span
                    style={{
                      backgroundColor: "#E9E8E9",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <i className="fa-solid fa-headphones mt-3"></i>
                  </span>
                </div>
                <div className="col-md-10 col-10">
                  <div className="">
                    <h1 className="fs-6 fw-bold">
                      {trasnaltions[lang].Sunday1}
                    </h1>
                    <p className="text-muted" style={{ fontSize: "0.82rem" }}>
                      {trasnaltions[lang].Saturday1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md mt-4">
            <div className="shadow p-3 rounded-3">
              <div className="row">
                <div className="col-md-2 col-2">
                  <span
                    style={{
                      backgroundColor: "#E9E8E9",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <i className="fa-solid mt-3 fa-location-dot"></i>
                  </span>
                </div>
                <div className="col-md-10 col-10">
                  <div className="">
                    <h1 className="fs-6 fw-bold">
                      {trasnaltions[lang].OurAddress}
                    </h1>
                    <p className="text-muted" style={{ fontSize: "0.82rem" }}>
                      {trasnaltions[lang].Maple}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center ">
          <div className="col-md-8 shadow p-4 py-5">
            <div className="text-center">
              <h1 className="fs-5 fw-bold">{trasnaltions[lang].GetinTouch}</h1>
            </div>
            <form action="">
              <div className="row mt-3 ">
                <div className="col-md-6 col-6">
                  <div className="">
                    <input
                      type="text"
                      placeholder={trasnaltions[lang].FirstName}
                      className="w-100 form-control"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="">
                    <input
                      type="text"
                      placeholder={trasnaltions[lang].EmailAddress}
                      className="w-100 form-control"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="">
                    <input
                      type="text"
                      placeholder={trasnaltions[lang].Subject}
                      className="w-100 form-control"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="">
                    <textarea
                      placeholder={trasnaltions[lang].WriteMessage}
                      name=""
                      className="w-100 form-control"
                      rows={5}
                      id=""
                    ></textarea>
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="text-white px-3 py-1 rounded"
                      style={{ backgroundColor: "#252223" }}
                    >
                      {trasnaltions[lang].SENDMESSAGE}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
