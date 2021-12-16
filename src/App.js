import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
// import Hero from "./components/Hero";
// import imgHero from "./images/Cover.jpeg";
import Details from "./components/Details";
import Menu from "./components/Menu";

const App = () => {
  const imgsUrl = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
  const [movies, setMovies] = useState([]);
  const [moviesAPI, setMoviesAPI] = useState([0, 1]);
  const [isReady, setIsReady] = useState(false);
  const [modale, setModale] = useState(null);
  const urlsAPI = [
    "https://api-allocine.herokuapp.com/api/movies/popular",
    "https://api-allocine.herokuapp.com/api/movies/upcoming",
    "https://api-allocine.herokuapp.com/api/movies/top_rated",
  ];

  const fetchData = async (moviesAPI) => {
    console.log(urlsAPI[moviesAPI[0]] + "?p=" + moviesAPI[1]);
    const response = await axios.get(
      urlsAPI[moviesAPI[0]] + "?p=" + moviesAPI[1]
    );
    setMovies(response.data.results);
    setIsReady(true);
  };

  useEffect(() => {
    console.log("enter useEffect");
    fetchData(moviesAPI);
  }, [moviesAPI]);

  console.log("ADD HERE");

  return (
    <div className="App">
      <Header />
      <Menu
        changeList={(num) => {
          return () => {
            setMoviesAPI([num, 1]);
            setIsReady(false);
          };
        }}
        pageplus={(num) => {
          return () => {
            setMoviesAPI([moviesAPI[0], moviesAPI[1] + num]);
            setIsReady(false);
          };
        }}
        page={moviesAPI[1]}
      />

      {!isReady ? (
        <p className="loading">loading</p>
      ) : (
        <ul className="moviespage">
          {movies.map((aMovie, index) => {
            console.log(aMovie);
            return (
              <Details
                key={index}
                index={index}
                original_title={aMovie.original_title}
                release_date={aMovie.release_date}
                overview={aMovie.overview}
                poster={imgsUrl + aMovie.poster_path}
                setModale={setModale}
              ></Details>
            );
          })}
        </ul>
      )}

      {modale !== null && (
        <div
          className="modale"
          onClick={() => {
            setModale(null);
          }}
        >
          <div className="titlemodale">{movies[modale].original_title}</div>
          <span>Langage : {movies[modale].original_language}</span>
          <span>Moyenne des votes : {movies[modale].vote_average}</span>
          <img src={imgsUrl + movies[modale].backdrop_path} />
          <div className="seances">
            Voir les séances disponibles autour de moi
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
