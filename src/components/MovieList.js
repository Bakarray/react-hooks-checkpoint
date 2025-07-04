import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <div className="no-results">
          <p>
            No movies match your filters. Try adjusting your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
