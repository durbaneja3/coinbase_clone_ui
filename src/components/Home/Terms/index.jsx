import React from "react";
import Container from "../../Common/Container";

export default function Terms() {
  return (
    <Container>
      <div className="Terms">
        <p>¹Crypto rewards is an optional Coinbase offer.</p>
        <p>
          ²Limited while supplies last and amounts offered for each quiz may
          vary. Must verify ID to be eligible and complete quiz to earn. Users
          may only earn once per quiz. Coinbase reserves the right to cancel the
          Earn offer at any time.
        </p>
        <p>
          ³<span className="HyperLinkMainColor">Terms apply.</span> Valid for
          new users who make a cryptocurrency purchase on Coinbase. Limited
          while supplies last or Coinbase revokes this incentive at its sole
          discretion. Coinbase reserves the right to change the terms,
          eligibility criteria, and payouts for all incentives at any time, for
          any reason. Void where prohibited or if Coinbase determines that the
          customer is not eligible for the offer.
        </p>
        <p>
          ⁴Sum of median estimated savings and rewards earned, per user in 2021
          across multiple Coinbase programs (excluding sweepstakes). This amount
          includes fee waivers from Coinbase One (excluding the subscription
          cost), rewards from Coinbase Card, and staking rewards.
        </p>
      </div>
    </Container>
  );
}
