import { useEffect, useState } from "react";

function CountdownTimer() {
  // 🔹 تاريخ النهاية
  const targetDate = new Date("2026-02-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

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

  return (
    <div className="time-counter" style={{ marginTop: "11rem" }}>
      <div className="time-countdown clearfix d-flex gap-1">
        <div className="counter-column">
          <div className="inner">
            <span className="count">{timeLeft.days}</span>
            Days
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{timeLeft.hours}</span>
            Hours
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{timeLeft.minutes}</span>
            Mins
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{timeLeft.seconds}</span>
            Secs
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
