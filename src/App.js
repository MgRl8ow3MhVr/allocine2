import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";

import imgHero from "./images/Cover.jpeg";

function App() {
  return (
    <>
      <Header />
      <Hero name="2001 Odyssey" url={imgHero} />
      <Details />
    </>
  );
}

export default App;
