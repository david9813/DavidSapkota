import React from "react";
import "./Portfolio.css";
import { Link as ScrollLink, Element } from "react-scroll";


function Portfolio() {
  return (
    <div className="B">
      <div className="this">This is what I make</div>
      <div className="pot_p">
        applications that inspire, simplify <br />
        and elevate the way we engage with the digital world
      </div>

      <button className="but_qui">
        <a
          href="https://biblequizdavid.netlify.app/"
          style={{ color: "white" }}
        >
          Quiz App
        </a>
      </button>

      <button className="but_cal">
        <a
          href="https://github.com/david9813/Calculator.git"
          style={{ color: "white" }}
        >
          Calculator
        </a>
      </button>


      <button className="but_cal">
        <a
          href="https://play.google.com/apps/test/com.davidsapkota.JourneyofFaith/1"
          style={{ color: "white" }}
        >
          MobileApp
        </a>
      </button>
     
      <button className="but_cal">
        <a
          href="https://github.com/david9813"
          style={{ color: "white" }}
        >
      Github
        </a>
      </button>
    </div>
  );
}

export default Portfolio;
