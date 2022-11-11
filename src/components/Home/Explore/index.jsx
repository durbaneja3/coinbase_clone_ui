import React from "react";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { coins } from "./data";

export default function Explore() {
  const [category, setCategory] = useState("TOPGAINERS");
  return (
    <div className="Explore">
      <Container>
        <div
          className="ExploreWrapper"
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
            <Link to="/comingSoon">
              <Button>See more assets</Button>
            </Link>
          </div>

          <div className="ExploreCrypto">
            <div className="ExploreCryptoBtns">
              <button
                className={category === "TOPGAINERS" ? "Current" : ""}
                onClick={() => setCategory("TOPGAINERS")}
              >
                Top Gainers
              </button>
              <button
                className={category === "TRADABLE" ? "Current" : ""}
                onClick={() => setCategory("TRADABLE")}
              >
                Tradable
              </button>
              <button
                className={category === "NEW" ? "Current" : ""}
                onClick={() => setCategory("NEW")}
              >
                New on Coinbase
              </button>
            </div>

            <div className="ExploreCryptoData">
              {coins
                .filter((coin) => coin.category === category)
                .map((coin) => (
                  <div className="ExploreCard">
                    <div className="ExploreCardImg">
                      <img src={coin.image} height="40px" />
                    </div>
                    <div className="ExploreCardInfo">
                      <h2>{coin.name}</h2>
                      <h3>{coin.price}</h3>
                    </div>
                    <div className="ExploreCardPercent">
                      <h4
                        style={{
                          color: coin.percent <= 0 ? "crimson" : "#388551",
                        }}
                      >
                        {coin.percent}%
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
