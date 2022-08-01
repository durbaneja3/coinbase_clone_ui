import React from "react";
import ExploreCard1 from "../../../assets/exploreCard1.png";
import ExploreCard2 from "../../../assets/exploreCard2.png";
import ExploreCard3 from "../../../assets/exploreCard3.png";
import ExploreCard4 from "../../../assets/exploreCard4.png";
import ExploreCard5 from "../../../assets/exploreCard5.png";
import ExploreCard6 from "../../../assets/exploreCard6.png";
import Container from "../../Common/Container";

export default function Explore() {
  return (
    <div className="Explore">
      <Container>
        <div
          style={{
            display: "flex",
            paddingBottom: "6rem",
          }}
        >
          <div className="ExploreInfo">
            <h2>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h2>
            <h3>
              Simply and securely buy, sell, and manage hundreds of
              cryptocurrencies.
            </h3>
            <button>See more assets</button>
          </div>

          <div className="ExploreCrypto">
            <div className="ExploreCryptoBtns">
              <button>Top Gainers</button>
              <button>Tradable</button>
              <button>New on Coinbase</button>
            </div>

            <div className="ExploreCryptoData">
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard1} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard2} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard3} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard4} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard5} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
              <div className="ExploreCard">
                <div className="ExploreCardImg">
                  <img src={ExploreCard6} height="40px" />
                </div>
                <div className="ExploreCardInfo">
                  <h2>DerivaDAO</h2>
                  <h3>$0.91</h3>
                </div>
                <div className="ExploreCardPercent">
                  <h4>7.14%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
