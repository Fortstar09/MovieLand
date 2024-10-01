import { useState, useEffect } from "react";
import search from "./assets/search.svg";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

const API_URL = "https://www.omdbapi.com/?apikey=dad4d177";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies(searchWord);
  }, [searchWord]);

  return (
    <>
      <Modal />
      <div className="app">
        <h1>MovieSearch</h1>

        <div className="search">
          <input
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={search}
            alt="search"
            onClick={() => {
              searchMovies(searchWord);
            }}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

const Footer = () => {
  return (
    <footer>
      <p>Learning.Oct</p>
      <p>© 2022 MovieSearch</p>
      <a href="https://github.com/Fortstar09" target="blank">
        Github
      </a>
    </footer>
  );
};
