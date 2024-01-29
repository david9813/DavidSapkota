import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about_me">About Me</div>
      <div className="about_p">
        In the bustling city of Berlin, Germany, you'll find me, David Sapkota,
        a devoted father of two, originally from the picturesque landscapes of
        Nepal. My journey is an exploration of challenges in dynamic
        environments, fueled by a deep-seated desire for continuous growth and
        career advancement. A perpetual enthusiast, self-confident, and an
        eternal optimist. Resourcefulness defines me, coupled with a strong
        sense of responsibility. Proficient in the art of prioritizing work and
        eagerly embracing new challenges.
      </div>

      <div className="icon">
        <a href="https://www.facebook.com/Davidsapkota123">
          <img
            src="\Facebook_icon.svg.png"
            alt=" facebook"
            className="facebook"
          />
        </a>
        <a href="https://www.instagram.com/david.sapkota.1/?igsh=aWV1bXFwd2pnb3V6 ">
          <img src="\insta.png" alt=" instagram" className="instageam" />
        </a>

        <a href="https://www.linkedin.com/in/david-sapkota-5491372a1/">
          <img
            src="\5771768.png"
            className="linkin"
          />
        </a>
      </div>
    </div>
  );
}

export default About