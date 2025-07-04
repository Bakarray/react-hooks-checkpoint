import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details-container">
        <div className="movie-not-found">
          <h2>Movie not found</h2>
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <Link to="/" className="back-button">
          ← Back to Movies
        </Link>
        <h1 className="movie-title">{movie.title}</h1>
      </div>

      <div className="movie-content">
        <div className="movie-poster-large">
          <img src={movie.posterURL} alt={movie.title} />
        </div>

        <div className="movie-info">
          <div className="movie-rating">
            <div className="rating-value">{movie.rating.toFixed(1)}/10</div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(movie.rating / 2) ? "star filled" : "star"
                  }
                >
                  {i < movie.rating / 2 ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>

          <div className="movie-description">
            <h3>Synopsis</h3>
            <p>{movie.description}</p>
          </div>

          <div className="movie-trailer">
            <h3>Trailer</h3>
            <div className="trailer-container">
              <iframe
                width="100%"
                height="400"
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
