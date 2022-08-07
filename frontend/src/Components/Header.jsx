import React from "react";
import Navbar from "./Navbar";
import ParticleBackground from "../ParticleBackground";
import { particlesJS } from "react-tsparticles";
function Header() {
  return (
    
      <div id="main">
    <div class="container">
        <div class= "tsparticles" id= "tsparticles">
        <ParticleBackground />
        </div>
    </div>
        <Navbar />
        
        <div className="name">
          <h1>
            <span>Engineered Programming Excellence </span>
          </h1>
          <p className="details">
            Providing diverse software development services to meet your
            engineering requirements.
          </p>
        </div>
      </div>
    
  );
}

export default Header;
