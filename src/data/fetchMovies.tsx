import { movies$ } from "./movies";
import { MovieProps } from "../utils";

export const fetchMovies  = async (numberOfPages: number, numberOfItems = 4): Promise<MovieProps[]> => {
  try {
    const movies = await movies$;
    let startIndex = 0;

    numberOfItems = isNaN(numberOfItems) ? 4 : numberOfItems;
    startIndex = (numberOfPages - 1) * numberOfItems;

    return numberOfPages <= 0 || numberOfPages > movies.length
      ? movies
      : movies.slice(startIndex, numberOfPages * numberOfItems);
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};