import { movies$ } from "./movies";

export const fetchMovies = async (numberOfPages, numberOfItems = 4) => {
  try {
    const movies = await movies$;
    let startIndex = 0;

    numberOfItems = isNaN(numberOfItems) ? 4 : numberOfItems;
    startIndex = (numberOfPages - 1) * numberOfItems;

    return numberOfPages <= 0 || numberOfPages > movies.lenght
      ? movies
      : movies.slice(startIndex, numberOfPages * numberOfItems);
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};