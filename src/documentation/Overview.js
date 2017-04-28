import React from 'react';
import Section from '../components/Section';

const Overview = () => (
  <div>

    <Section title="Overview" level="2">
      <p>Approximately 20% of the UK population have a disability. That's 1 in every 5 people that might be unable to use your website
        or application. The web is often 'just another place' where this minority are forgotten so the aim of this guide is to enable Software
        Engineers to produce better code to offer a better experience for those who require assistive technologies.</p>
      <Section title="Is this for me?" level="3">
        <p>If you write frontend code I'd recommend you continue reading. It contains a raft of resources, information and coded
          examples of best practices and great semantics. It's unique due to the addition of audio samples of assistive tools interpretting the
          coded examples.</p>
        <p>Throughout a basic level of competency in HTML, CSS & Javascript is assumed.</p>
      </Section>

      <Section title="How should I use this?" level="3">
        <p>You can use this as:</p>
        <ul>
          <li>A reference guide</li>
          <li>A training tool</li>
          <li>In conjunction with a a11y tools</li>
          <li>A bookmark</li>
          <li>A talking point with colleagues</li>
        </ul>
        <p>The main beneficiaries will be your users.</p>
      </Section>
    </Section>

  </div>
);

export default Overview;
