import { LangContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import personm7 from "./assets/AboutImg/personm7.webp"
import personm8 from "./assets/AboutImg/personm8.webp"
import personm9 from "./assets/AboutImg/personm9.webp"
export default function About() {
  const { lang, trasnaltions } = useContext(LangContext);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 232 ? prev + 1 : prev));
      setCount2((prev) => (prev < 521 ? prev + 1 : prev));
      setCount3((prev) => (prev < 1453 ? prev + 1 : prev));
      setCount4((prev) => (prev < 32 ? prev + 1 : prev));
    }, 1);

    return () => clearInterval(interval);
  }, []);

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
              <h1 className="fs-5">{trasnaltions[lang].About}</h1>
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
                  {trasnaltions[lang].About}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <span
                className="px-3 py-1 rounded-5"
                style={{ backgroundColor: "#E9E8E9", fontSize: "0.8rem" }}
              >
                <i class="fa-solid fa-circle-exclamation"></i>{" "}
                {trasnaltions[lang].AboutUs}
              </span>
              <h1 className="fw-bold fs-3 mt-3">{trasnaltions[lang].Nemo}</h1>
              <p className="mt-3 text-muted" style={{ fontSize: "0.8rem" }}>
                {trasnaltions[lang].Temporibusautem}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <p className="mt-3 text-muted" style={{ fontSize: "0.8rem" }}>
                {trasnaltions[lang].Itaque}
              </p>
              <p className="mt-3 text-muted" style={{ fontSize: "0.8rem" }}>
                {trasnaltions[lang].Ameteosut}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-md-4">
            <div className="">
              <span
                className="iconBlack"
                style={{
                  backgroundColor: "#DFDEDE",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "1.5rem",
                }}
              >
                <i class="fa-solid fa-bullseye "></i>
              </span>
              <div className="mt-4">
                <h1 className="fs-6 fw-bold">{trasnaltions[lang].Atveroeos}</h1>
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {trasnaltions[lang].Nam}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <span
                className="iconBlack"
                style={{
                  backgroundColor: "#DFDEDE",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "1.5rem",
                }}
              >
                <i class="fa-solid fa-user-check"></i>
              </span>
              <div className="mt-4">
                <h1 className="fs-6 fw-bold">
                  {trasnaltions[lang].Sedutperspiciatis}
                </h1>
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {trasnaltions[lang].At}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <span
                className="iconBlack"
                style={{
                  backgroundColor: "#DFDEDE",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "1.5rem",
                }}
              >
                <i class="fa-solid fa-wifi"></i>
              </span>
              <div className="mt-4">
                <h1 className="fs-6 fw-bold">
                  {trasnaltions[lang].Nemoenimipsam}
                </h1>
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {trasnaltions[lang].Nequeporroquisquam}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#F6F6F6",
        }}
      >
        <div className="container py-5 ">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-regular fa-face-smile fs-2 mt-2 "></i>
                </div>
                <div className="col-md-10 ">
                  <p className="fw-bold fs-2">{count}</p>
                  <div
                    className=""
                    style={{ marginTop: "-20px", fontSize: "0.8rem" }}
                  >
                    <span className="fw-bold text-muted">
                      {trasnaltions[lang].HappyClients}
                    </span>
                    <br />
                    <span className="text-muted">
                      {trasnaltions[lang].consequunturquae}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-book fs-2 mt-2 "></i>
                </div>
                <div className="col-md-10 ">
                  <p className="fw-bold fs-2">{count2}</p>
                  <div
                    className="w-75"
                    style={{ marginTop: "-20px", fontSize: "0.8rem" }}
                  >
                    <span className="fw-bold text-muted">
                      {trasnaltions[lang].Projects}
                    </span>
                    <span className="text-muted">
                      {trasnaltions[lang].adipisciatquecumquiaaut}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-regular fa-headphones fs-2 mt-2 "></i>
                </div>
                <div className="col-md-10 ">
                  <p className="fw-bold fs-2">{count3}</p>
                  <div
                    className=""
                    style={{ marginTop: "-20px", fontSize: "0.8rem" }}
                  >
                    <span className="fw-bold text-muted">
                      {trasnaltions[lang].HoursOfSupport}
                    </span>{" "}
                    <span className="text-muted">
                      {" "}
                      {trasnaltions[lang].autcommodiquaerat}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-users fs-2 mt-2  "></i>
                </div>
                <div className="col-md-10 ">
                  <p className="fw-bold fs-2">{count4}</p>
                  <div
                    className=""
                    style={{ marginTop: "-20px", fontSize: "0.8rem" }}
                  >
                    <span className="fw-bold text-muted">
                      {trasnaltions[lang].HardWorkers}
                    </span>
                    <br />
                    <span className="text-muted">
                      {trasnaltions[lang].rerumdolor}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card cardPersons p-3 rounded-4">
              <span
                className="faquoteleft"
                style={{
                  borderRadius: "50%",
                  padding: "5px",
                  border: "#F2F2F2 solid 1px",
                  width: "fit-content",
                  backgroundColor: "#fff",
                }}
              >
                <i class="fa-solid fa-quote-left "></i>
              </span>
              <p>{trasnaltions[lang].Implementing}</p>
              <hr />
              <div className="row">
                <div className="col-md-2">
                  <div className="">
                    <img src={personm7} className="img-fluid" style={{borderRadius:"50%"}} alt="" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="">
                   <h1 className="fs-6 fw-bold">{trasnaltions[lang].DanielMorgan}</h1>
                   <p style={{fontSize:"0.7rem"}} className="text-muted">{trasnaltions[lang].ChiefInnovationOfficer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{backgroundColor:"#EEEEEE",minHeight:"298px"}} className="card cardPersons p-3 rounded-4 mt-5">
              <span
                className="faquoteleft"
                style={{
                  borderRadius: "50%",
                  padding: "5px",
                  border: "#F2F2F2 solid 1px",
                  width: "fit-content",
                  backgroundColor: "#fff",
                }}
              >
                <i class="fa-solid fa-quote-left "></i>
              </span>
              <p>{trasnaltions[lang].Innovativeapproachto}</p>
              <hr />
              <div className="row">
                <div className="col-md-2">
                  <div className="">
                    <img src={personm8} className="img-fluid" style={{borderRadius:"50%"}} alt="" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="">
                   <h1 className="fs-6 fw-bold">{trasnaltions[lang].NathanBrooks}</h1>
                   <p style={{fontSize:"0.7rem"}} className="text-muted">{trasnaltions[lang].UXDirector}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>     
            <div className="col-md-4">
            <div style={{minHeight:"298px"}} className="card cardPersons p-3 rounded-4">
              <span
                className="faquoteleft"
                style={{
                  borderRadius: "50%",
                  padding: "5px",
                  border: "#F2F2F2 solid 1px",
                  width: "fit-content",
                  backgroundColor: "#fff",
                }}
              >
                <i class="fa-solid fa-quote-left "></i>
              </span>
              <p>{trasnaltions[lang].Professionalexpertiseanddedicationhave}</p>
              <hr />
              <div className="row">
                <div className="col-md-2">
                  <div className="">
                    <img src={personm9} className="img-fluid" style={{borderRadius:"50%"}} alt="" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="">
                   <h1 className="fs-6 fw-bold">{trasnaltions[lang].ChristopherLee}</h1>
                   <p style={{fontSize:"0.7rem"}} className="text-muted">{trasnaltions[lang].TechnicalDirector}</p>
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
