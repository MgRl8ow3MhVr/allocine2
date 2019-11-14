import React from "react";

const Details = props => {
  const { original_title, release_date, overview, poster } = props;
  return (
    <section className="details">
      <picture>
        <img src={poster} alt="poster" />
      </picture>
      <nav>
        <span>{original_title}</span>
        <span>{release_date} </span>
        <p>{overview}</p>
        {/* Voir composant react a telecharger Ellipsis */}
      </nav>
    </section>
  );
};

export default Details;
