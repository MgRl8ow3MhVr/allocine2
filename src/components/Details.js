import React from "react";

const Details = (props) => {
  const { original_title, release_date, overview, poster, index } = props;
  return (
    <section
      className="details"
      onClick={() => {
        console.log("props.key", index);
        props.setModale(index);
      }}
    >
      <picture>
        <img src={poster} alt="poster" />
      </picture>
      <nav>
        <span>{original_title}</span>
        <span>{release_date} </span>
        <p>{overview}</p>
      </nav>
    </section>
  );
};

export default Details;
