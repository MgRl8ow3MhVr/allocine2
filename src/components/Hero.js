import React from "react";

const Hero = props => {
  return (
    <>
      <section className="hero">
        <span>{props.name}</span>
        <img src={props.url} />
      </section>
    </>
  );
};

export default Hero;
