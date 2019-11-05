import React from "react";
import smallCover from "../images/smallCover.jpg";
import TextLine from "./TextLine";

const Details = props => {
  return (
    <section className="details">
      <div>
        <picture>
          <img src={smallCover} alt="smallCover" />
        </picture>
        <nav>
          <TextLine grey="Date de Sortie" link="27 Septembre" />
          <TextLine grey="De" link="Stanley Kubrick" />
          <TextLine grey="Genre" link="Science Fiction" />
          <TextLine grey="Nationalite" link="Americain Britannique" />
        </nav>
      </div>

      <h1>SYNOPSYS ET DETAILS</h1>

      <p>
        A l'aube de l'Humanité, dans le désert africain, une tribu de primates
        subit les assauts répétés d'une bande rivale, qui lui dispute un point
        d'eau. La découverte d'un monolithe noir inspire au chef des singes
        assiégés un geste inédit et décisif. Brandissant un os, il passe à
        l'attaque et massacre ses adversaires. Le premier instrument est né. En
        2001, quatre millions d'années plus tard, un vaisseau spatial évolue en
        orbite lunaire au rythme langoureux du "Beau Danube Bleu". A son bord,
        le Dr. Heywood Floyd enquête secrètement sur la découverte d'un
        monolithe noir qui émet d'étranges signaux vers Jupiter. Dix-huit mois
        plus tard, les astronautes David Bowman et Frank Poole font route vers
        Jupiter à bord du Discovery. Les deux hommes vaquent sereinement à leurs
        tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur
        exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans
        doute plus humain que ses maîtres, commence à donner des signes
        d'inquiétude : à quoi rime cette mission et que risque-t-on de découvrir
        sur Jupiter ?
      </p>
    </section>
  );
};

export default Details;
