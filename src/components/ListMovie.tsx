import { Movie } from "./Movie";
import { ListMovieProps } from "../utils";

export function ListMovie({
  movies,
  categories,
  handleLike,
  handleDelete,
}: ListMovieProps) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-2 movies">
      {movies.map((movie) =>
        !categories.length ? (
          <Movie
            key={movie.id}
            movie={movie}
            handleLike={handleLike}
            handleDelete={handleDelete}
          />
        ) : (
          categories.includes(movie.category) && (
            <Movie
              key={movie.id}
              movie={movie}
              handleLike={handleLike}
              handleDelete={handleDelete}
            />
          )
        )
      )}
    </div>
  );
}
