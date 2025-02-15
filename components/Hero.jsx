import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Next.js Sample Project
    </h1>
    <p classname="otherapp" data-testid="hero-otherapp">
      <a href="https://sampler2.deboernet.eu">Naar Sample 2 applicatie</a>
    </p>
    <p className="lead" data-testid="hero-lead">
      This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}
      <a href="https://nextjs.org">Next.js</a>
    </p>
  </div>
);

export default Hero;
