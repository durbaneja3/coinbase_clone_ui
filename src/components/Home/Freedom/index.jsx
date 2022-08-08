import React from "react";
import FreedomImg from "../../../assets/freedomCard1.webp";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";

export default function Freedom() {
  return (
    <Container>
      <div className="Freedom">
        <div className="FreedomInfo">
          <h2>The freedom of crypto for everyone, everywhere</h2>
          <h3>
            We're committed to creating more economic freedom through
            accessible, safe, and secure financial tools for everyone.
          </h3>
          <Link to="/comingSoon">
            <Button>Learn more</Button>
          </Link>
        </div>
        <div className="FreedomImg">
          <img src={FreedomImg} height="900px" />
        </div>
      </div>
    </Container>
  );
}
