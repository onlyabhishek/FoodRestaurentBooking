import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Our passion for food is unmatched.</p>
            </div>
            <p className="mid">
              At our restaurant, we are dedicated to bringing you exceptional 
              vegetarian dishes made with fresh, high-quality ingredients. 
              Our commitment is to create meals that not only taste great but also 
              nourish your body and soul. From carefully crafted recipes to 
              impeccable service, every aspect of our restaurant is designed 
              to deliver an extraordinary dining experience.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="./about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
