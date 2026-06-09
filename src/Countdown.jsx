import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("December 20, 2026 18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown to Our Big Day</h2>
      <div className="timer">
        <div>
          <h3>{timeLeft.days}</h3>
          <p>Days</p>
        </div>
        <div>
          <h3>{timeLeft.hours}</h3>
          <p>Hours</p>
        </div>
        <div>
          <h3>{timeLeft.minutes}</h3>
          <p>Minutes</p>
        </div>
        <div>
          <h3>{timeLeft.seconds}</h3>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;