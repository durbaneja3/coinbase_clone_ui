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
          <Link to="/">
            <h1 className="Title">coinbase</h1>
          </Link>
          <ul className="Links">
            {[
              {
                name: "Explore",
                link: "/comingSoon",
              },
              {
                name: "Learn",
                link: "/comingSoon",
              },
              {
                name: "Individuals",
                link: "/comingSoon",
              },
              {
                name: "Businesses",
                link: "/comingSoon",
              },
              {
                name: "Developers",
                link: "/comingSoon",
              },
              {
                name: "Company",
                link: "/comingSoon",
              },
            ].map((navItem) => {
              return (
                <li>
                  <Link to={navItem.link}>{navItem.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="NavBtns">
            <Link to="/comingSoon">
              <button
                style={{
                  backgroundColor: "white",
                  color: "#000",
                }}
              >
                Sign In
              </button>
            </Link>
            <Link to="/signUp">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
