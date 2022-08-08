import React from "react";
import Container from "../../components/Common/Container";
import SignUpImg from "../../assets/signupImg.svg";

export default function Signup() {
  return (
    <Container>
      <div className="Signup">
        <form className="SignupForm">
          <div className="SignupHeader">
            <h1>Create an account</h1>
            <h2>Required fields have an asterisk: *</h2>
          </div>
          <div className="SignupRow">
            <div>
              <label>First name*</label>
              <input placeholder="First name" />
            </div>
            <div>
              <label>Last name*</label>
              <input placeholder="Last name" />
            </div>
          </div>
          <div className="SignupColumns">
            <div className="SignupColumn">
              <label>Email*</label>
              <input placeholder="Email" />
            </div>
            <div className="SignupColumn">
              <label>Password*</label>
              <input placeholder="Minimum 8 characters" />
            </div>

            <div className="SignupCheckbox">
              <input type="checkbox" />
              <h3>
                I certify that I am 18 years of age or older, agree to the{" "}
                <span className="HyperLinkMainColor">User Agreement</span>, and
                acknowledge the{" "}
                <span className="HyperLinkMainColor">Privacy Policy</span>.
              </h3>
            </div>

            <div className="SignupBtn">
              <button>Create free account</button>
            </div>
            <div className="SignupLink">
              <p>
                <span className="HyperLinkMainColor">Sign up</span> for a
                business account
              </p>
            </div>
            <div className="SignupDisclosure">
              <p>
                For information on how we use your data see.{" "}
                <span className="HyperLinkMainColor">US Disclosures</span>
              </p>
            </div>
          </div>
        </form>

        <div className="SignupPromotion">
          <h1>Get up to $200 worth of BTC for setting up an account</h1>
          <h2>
            After you set up your account and successfully make a purchase, spin
            the wheel of rewards and earn up to $200 worth of Bitcoin.{" "}
            <span className="HyperLinkMainColor">See terms</span>
          </h2>
          <img src={SignUpImg} height="240" />
        </div>
      </div>
    </Container>
  );
}
