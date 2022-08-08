import React from "react";
import TradeCard1 from "../../../assets/tradeCard1.webp";
import TradeCard2 from "../../../assets/tradeCard2.webp";
import TradeCard3 from "../../../assets/tradeCard3.webp";
import TradeCard4 from "../../../assets/tradeCard4.webp";
import TradeCard5 from "../../../assets/tradeCard5.webp";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";

export default function Trade() {
  return (
    <Container>
      <div className="Trade">
        {[
          {
            title: "TRADE",
            subtitle: "Buy, sell, and store hundreds of cryptocurrencies",
            text: "From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency. Protect your crypto with best in class cold storage.",
            btn: "Sign up now",
            image: TradeCard1,
            link: "/signUp",
          },
          {
            title: "NFT",
            subtitle: "Coinbase NFT is here!",
            text: "That’s right: Coinbase NFT is now available. Create your profile, connect with your favorite artists, or buy and sell NFTs using any self-custody wallet.",
            btn: "Learn more",
            image: TradeCard2,
            link: "/comingSoon",
          },
          {
            title: "WALLET",
            subtitle: "Do more with your crypto with Coinbase Wallet",
            text: "Store your crypto in your own personal crypto wallet and explore decentralized finance (DeFi), buy and sell NFTs, and more.",
            btn: "Learn more",
            image: TradeCard3,
            link: "/comingSoon",
          },
          {
            title: "CARD",
            subtitle: "Earn crypto rewards with our Visa™ debit card¹",
            text: "Your daily coffee and weekly grocery run can now earn you up to 4% back in a crypto reward of your choice when you use Coinbase Card.",
            btn: "Get your card",
            image: TradeCard4,
            link: "/comingSoon",
          },
          {
            title: "INSTITUTIONAL",
            subtitle: "The financial institution for a digital asset future",
            text: "Coinbase Institutional is the first choice for sophisticated investors and institutions that want to invest in digital assets",
            btn: "Learn more",
            image: TradeCard5,
            link: "/comingSoon",
          },
        ].map((card) => (
          <div className="TradeCard">
            <div className="TradeImg">
              <img src={card.image} height="700px" />
            </div>
            <div className="TradeAbout">
              <h2>{card.title}</h2>
              <h3>{card.subtitle}</h3>
              <p>{card.text}</p>
              <Link to={card.link}>
                <Button>{card.btn}</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
