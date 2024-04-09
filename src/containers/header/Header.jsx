import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="Home">
      <div className="gpt3__header-image">
        {/* <img src={ai} alt="ai" /> */}
      </div>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Go</h1>
        <h1 className="gradient__text"> Travels with YZK</h1>
        <p>
          In a world where love knows no boundaries, there exists a profound
          connection between romance and travel. Couples embark on journeys not
          only to explore new destinations but also to delve deeper into their
          relationships. This article celebrates the intertwining of love and
          travel, where the journey itself becomes as enchanting as the
          destination.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button" className="gradient__bg">
            Get Started
          </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
