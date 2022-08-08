import React from "react";
import PromotionImg from "../../../assets/promotionCard1.webp";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <Container>
      <div className="Promotion">
        <div className="PromotionImg">
          <img src={PromotionImg} height="400px" />
        </div>
        <div className="PromotionInfo">
          <h2>Take control of your money</h2>
          <h3>
            Start your portfolio today and{" "}
            <span className="PromotionLink">get up to $200 in crypto³ →</span>
          </h3>
          <form className="PromotionSignup">
            <input placeholder="satoshi@nakamoto.com" />
            <Link to="/signUp">
              <Button>Sign up</Button>
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}
