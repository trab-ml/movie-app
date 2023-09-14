import React, { useEffect, useState } from "react";
import { movies$ } from "./data/movies";
import { ListMovie } from "./components/ListMovie";
import { MovieProps } from "./utils";

function App() {
  // State management
  const [moviesData, setMoviesData] = useState<MovieProps[]>([]);

  // Fetch movies on component mount
  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await movies$;
        setMoviesData(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  // Event handlers
  const handleLike = (id: number, like = 1) => {
    setMoviesData((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, likes: movie.likes + like } : movie
      )
    );
  };

  const handleDelete = (id: number) => {
    setMoviesData((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  };

  return (
    <div className="container app">
      <header className="d-flex flex-row justify-content-between">
        <h1>Movie App</h1>
      </header>

      <ListMovie
        movies={moviesData}
        handleLike={handleLike}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
