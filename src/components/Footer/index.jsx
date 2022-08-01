import React from "react";
import Container from "../Common/Container";

export default function Footer() {
  return (
    <Container>
      <div className="Footer">
        <div className="FooterCopyright">
          <h2>coinbase</h2>
          <h3>English</h3>
          <p>© 2022 Coinbase</p>
          <p>Blog • Twitter • Facebook</p>
        </div>

        <div className="FooterLinks">
          <div className="FooterSection1">
            <div className="FooterCard">
              <h2>Company</h2>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>press</li>
                <li>Investors</li>
                <li>Legal & privacy</li>
                <li>Cookie policy</li>
                <li>Cookie preferences</li>
                <li>Digital Asset Disclosures</li>
              </ul>
            </div>
            <div className="FooterCard">
              <h2>Learn</h2>
              <ul>
                <li>Browse crypto prices</li>
                <li>Coinbase Bytes newsletter</li>
                <li>Crypto basics</li>
                <li>Tips & tutorials</li>
                <li>Market updates</li>
                <li>What is Bitcoin?</li>
                <li>What is crypto?</li>
                <li>What is a blockchain?</li>
                <li>How to set up a crypto wallet</li>
                <li>How to send crypto</li>
                <li>Taxes</li>
              </ul>
            </div>
          </div>
          <div className="FooterSection2">
            <div className="FooterCard">
              <h2>Individuals</h2>
              <ul>
                <li>Buy & sell</li>
                <li>Earn free crypto</li>
                <li>Wallet</li>
                <li>NFT</li>
                <li>Card</li>
                <li>Derivatives</li>
              </ul>
            </div>
            <div className="FooterCard">
              <h2>Businesses</h2>
              <ul>
                <li>Institutional</li>
                <li>Prime</li>
                <li>Asset Hub</li>
                <li>Commerce</li>
              </ul>
            </div>
            <div className="FooterCard">
              <h2>Developers</h2>
              <ul>
                <li>Cloud</li>
                <li>Wallet SDK</li>
                <li>Coinbase Pay SDK</li>
                <li>Query & Transact</li>
                <li>Commerce</li>
                <li>Exchange & Pro</li>
                <li>Sign in with Coinbase</li>
                <li>Rosetta</li>
                <li>Participate</li>
                <li>Prime API</li>
              </ul>
            </div>
          </div>
          <div className="FooterSection3">
            <div className="FooterCard">
              <h2>Support</h2>
              <ul>
                <li>Help center</li>
                <li>Contact us</li>
                <li>Create account</li>
                <li>ID verification</li>
                <li>Account information</li>
                <li>Payment methods</li>
                <li>Account access</li>
                <li>Supported crypto</li>
                <li>Supported countries</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
