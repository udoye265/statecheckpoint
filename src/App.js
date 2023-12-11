import React, { useState, useRef } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./styles.css"

const App = () => {
  // const moviesData = [
  // ];

  const [movies, setMovies] = useState([]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const AddMovie = () => {
    const newMovie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: ratingRef.current.value,
    };

    setMovies([...movies, newMovie]);

    titleRef.current.value = "";
    descriptionRef.current.value = ""
    posterURLRef.current.value = ""
    ratingRef.current.value = ""
  };
 

  return (
    <div>
      <Filter onFilterChange />
      <MovieList movies={movies} />

      {movies.map((movie)=>{
        return <div>
          <h1>{movie.title}</h1>
          <h2>{movie.description}</h2>
          <img src={movie.posterURL}/>
          <p>{movie.rating}</p>
        </div>
      })}
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" ref={titleRef} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" ref={descriptionRef}></textarea>

        <label htmlFor="posterURL">Poster URL:</label>
        <input type="text" id="posterURL" ref={posterURLRef} />

        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" ref={ratingRef} />

        <button onClick={AddMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;

