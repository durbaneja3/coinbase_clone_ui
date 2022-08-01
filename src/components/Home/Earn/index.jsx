import React from "react";
import EarnCard1 from "../../../assets/earnCard1.webp";
import EarnCard2 from "../../../assets/earnCard2.webp";
import Container from "../../Common/Container";

export default function Earn() {
  return (
    <div className="Earn">
      <Container>
        <div
          style={{
            padding: "4rem 2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="EarnCard">
            <div className="EarnCardImg">
              <img src={EarnCard1} height="250px" />
            </div>
            <div className="EarnCardInfo">
              <h2>Earn crypto</h2>
              <p>
                Start earning crypto just for learning about how specific
                cryptocurrencies work.
              </p>
              <button>Earn more</button>
            </div>
          </div>
          <div className="EarnCard">
            <div className="EarnCardImg">
              <img src={EarnCard2} height="250px" />
            </div>
            <div className="EarnCardInfo">
              <h2>Learn the basics</h2>
              <p>
                Explore beginner guides, practical tutorials, and market updates
                on Bitcoin, Ethereum and more.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
