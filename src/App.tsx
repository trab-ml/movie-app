import React, { useEffect, useState } from "react";
import { fetchMovies } from "./data/fetchMovies";
import { ListMovie } from "./components/ListMovie";
import { CategoryFilter } from "./components/CategoryFilter";
import { MovieProps, OptionProps } from "./utils";
import './App.css';

function App() {
  // State management
  const [moviesData, setMoviesData] = useState<MovieProps[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  // Refer to the n-ème page
  const [page, setPage] = useState(1);

  // Refer to the numbers of items page
  const [itemsByPage, setItemsByPage] = useState(4);
  const [hasMorePages, setHasMorePages] = useState(true);

  // Fetch movies on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchMovies(page, itemsByPage);
  
        setMoviesData(movies);
        
        // Check if there are more pages based on the fetched data
        if (movies.length === 0 || movies.length < itemsByPage) {
          setHasMorePages(false);
        } else {
          setHasMorePages(true);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
      }
    }

    fetchData();
  }, [page, setPage, itemsByPage]);

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

  const handleOptionsChange = (newOptions: OptionProps[]) => {
    const categories = newOptions.map((option) => option.label);
    setOptions(categories);
  };

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => {
    if (hasMorePages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleItemsByPage = (e) => {
    const userInput = e.target.value;
    const constraint = /^\d*$/.test(userInput);
    constraint && setItemsByPage(parseInt(userInput));
  }

  return (
    <div className="container app">
      <header className="d-flex flex-row justify-content-between">
        <h1>Movie App</h1>
        <CategoryFilter
          movies={moviesData}
          onOptionsChange={handleOptionsChange}
        />
      </header>

      <ListMovie
        movies={moviesData}
        handleLike={handleLike}
        handleDelete={handleDelete}
        categories={options}
      />

      <nav className="d-flex align-items-center my-3">
        <button onClick={prevPage} disabled={page === 1} className="btn">
          Prev Page
        </button>

        <form action="" className="items-by-page-form">
          <input value={itemsByPage} onChange={handleItemsByPage} type="text" className="form-control" aria-label="Items by page input"></input>
        </form>

        <button onClick={nextPage} disabled={!hasMorePages}  className="btn">
          Next Page
        </button>
      </nav>
    </div>
  );
}

export default App;
