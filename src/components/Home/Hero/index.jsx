import React from "react";
import HeroImg from "../../../assets/freeMoney.webp";
import Container from "../../Common/Container";

export default function Hero() {
  return (
    <Container>
      <div className="Hero">
        <div className="HeroImgWrapper">
          <img src={HeroImg} height="680" />
        </div>
        <div className="HeroContent">
          <h2>The future of money is here</h2>
          <h3>
            Over 98 million people and businesses trust us to buy, sell, and
            manage crypto.
          </h3>
          <form className="HeroForm">
            <input placeholder="satoshi@nakamoto.com" />
            <button>Sign up</button>
          </form>
          <p>Sign up and get up to $200 in crypto³</p>
        </div>
      </div>
    </Container>
  );
}
