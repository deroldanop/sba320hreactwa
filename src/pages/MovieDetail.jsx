import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const API = "http://www.omdbapi.com/?apikey=97e9bb6a";

const MovieDetail = () => {
    const [movie, setMovie] = useState([]);
    const {imdbID} = useParams();
    useEffect(() => {
      searchMovie(imdbID);
    }, []);
  
    const searchMovie = async (title) => {
      const response = await fetch(`${API}&i=${title}`);
      const data = await response.json();
  
      setMovie(data);
    };  
    
    console.groupCollapsed(imdbID)
  return (
    
    <div className="container" key={imdbID}>
      <h1>{movie.Title}</h1>
      <h1>{movie.Year}</h1>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      <h2>{movie.Awards}</h2>
      <h2>{movie.Actors}</h2>
      <h3>{`Director: ${movie.Director}`}</h3>
      <h3>{`Writer: ${movie.Writer}`}</h3>
    <p>{movie.Plot}</p>
    </div>
    
  );
}

export default MovieDetail;