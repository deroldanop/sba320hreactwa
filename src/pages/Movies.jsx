import { useEffect, useState } from "react";
import SearchIcon from "../qMezIG01.svg";
import MovieCard from "./MovieCard";

//Here is your key: 97e9bb6a
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=97e9bb6a";


const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Mean Girls");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div> 
      {/* className="nav"
      <a href="./pages/Movies"> 
        <span class="hyperspan"></span>
    </a>    */}

      {movies?.length > 0 ? (
        // <div className="container">
        <div className="bloc">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Movies;