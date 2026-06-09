import { useEffect, useState } from "react";
import "./App.css";
import { Heart,
  Calendar,
  MapPin,
  Gift,
  Mail, Clock } from "lucide-react";

function App() {
  const weddingDate = new Date("June 11, 2026 11:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your RSVP has been received ❤️");
  };

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
    <>
      <section className="hero">
        <div className="overlay">
          <p className="welcome">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            <p className="subtitle">
            In the name of Allah, </p> <br/>
            We joyfully invite you to celebrate the Nikah of

          </p>

          <h1>Usman & Shabana 
</h1>

          <p className="subtitle">
            A blessed union of faith, love, and togetherness
          </p>

          <p className="hero-date">
            
11 June 2026 • 11:00 AM
          </p>

          <a href="#details">
            <button>View Invitation</button>
          </a>
        </div>
      </section>

      <section className="story">
        <h2>Our Story</h2>

        <p>
          Our journey began with faith and sincerity,  
growing into a bond built on trust, love, and prayer.
      <br/>
      Alhamdulillah, we are blessed to begin a new chapter together as one family.
        </p>
      </section>

      <section className="countdown">
        <h2>Countdown To Our Special Day</h2>

        <div className="timer">
          <div className="box">
            <h3>{timeLeft.days}</h3>
            <span>Days</span>
          </div>

          <div className="box">
            <h3>{timeLeft.hours}</h3>
            <span>Hours</span>
          </div>

          <div className="box">
            <h3>{timeLeft.minutes}</h3>
            <span>Minutes</span>
          </div>

          <div className="box">
            <h3>{timeLeft.seconds}</h3>
            <span>Seconds</span>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="details"
      >
        <h2>Nikah Ceremony</h2>

        <div className="card">
          <p><Calendar size={20} /> Thursday, 11 June 2026</p>
          <p><Clock size={20}/> 11:00 AM</p>
          <p><MapPin size={35}/> VKH Convention Centre, Theyyala</p>
        </div>
      </section>

      
      <section className="venue">
  <h2>We warmly welcome you to join us at</h2>

  <p>VKH Convention Centre, Theyyala</p>

  <a
    href="https://www.google.com/maps/dir//VKH+Convention+Centre,+Omachappuzha+Rd,+Theyyala,+Thayyalingal,+Nannambra,+Kerala+676307,+India/@25.1170079,55.2424924,10.81z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7b34cce28f9eb:0x47176074c6b202b5!2m2!1d75.9170684!2d10.9919751"
    target="_blank"
    rel="noreferrer"
  >
    <button>Get Direction</button>
  </a>
</section>

       {/* RSVP */}
      <section className="rsvp">
        <h2>Please confirm your attendance</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />

          <select required>
            <option value="">Select Attendance</option>
            <option>Yes, I will attend</option>
            <option>No, I can’t attend</option>
          </select>

          <button type="submit">Confirm RSVP</button>
        </form>
      </section>

      <footer>
        <p className="subtitle" >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
         <br/>Made with gratitude and love</p>
      </footer>
    </>
  );
}

export default App;