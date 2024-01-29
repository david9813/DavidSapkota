import React from 'react' 
import './Home.css'
import { Link as ScrollLink, Element } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <img
        src="/david.png"
        alt="My image"
        width="500"
        height="650"
        className="img1"
      />

      <div className="container_home">
        <div className="introduction_home"> Hi There, I am </div>
        <div className="my_name"> David Sapkota </div>
        <div className="believe">
          Whatever I have, wherever I am,
          <br />
          I can make it through <br />
          anything in the One <br />
          who makes me who I am
        </div>

        <ScrollLink to="about" smooth={true} duration={500}>
          <span className="material-symbols-outlined">expand_more</span>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Home;

