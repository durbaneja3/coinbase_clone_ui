import React from "react";
import RewardImg from "../../../assets/rewardImg.webp";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";

export default function Reward() {
  return (
    <div className="Reward">
      <Container>
        <div
          className="RewardWrapper"
          style={{
            padding: "6rem 1rem",
            display: "flex",
          }}
        >
          <div className="RewardInfo">
            <h2>Get up to $400 in rewards with Coinbase</h2>
            <h3>
              Coinbase users can earn up to $400 on average just by taking
              advantage of our rewards.⁴
            </h3>
            <Link to="/comingSoon">
              <Button>Start earning</Button>
            </Link>
          </div>
          <div className="RewardImg">
            <img src={RewardImg} height="300px" />
          </div>
        </div>
      </Container>
    </div>
  );
}
