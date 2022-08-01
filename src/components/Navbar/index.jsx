import React from "react";
import { Link } from "react-router-dom";
import Container from "../Common/Container";

export default function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="Ad">
        <p>Get up to $200 in crypto for getting started3 → </p>
      </div>
      <Container>
        <div className="Navbar">
          <h1 className="Title">coinbase</h1>
          <ul className="Links">
            <li>
              <Link to={"/Explore"}>Explore</Link>
            </li>
            <li>
              <Link to={"/Learn"}>Learn</Link>
            </li>
            <li>Individuals</li>
            <li>Businesses</li>
            <li>Developers</li>
            <li>Company</li>
          </ul>
          <div className="NavBtns">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
