// src/App.js
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Initialize with some movies
  useEffect(() => {
    const initialMovies = [
      {
        id: 1,
        title: "Inception",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        rating: 8.8,
      },
      {
        id: 2,
        title: "The Shawshank Redemption",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        rating: 9.3,
      },
      {
        id: 3,
        title: "The Dark Knight",
        description:
          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        rating: 9.0,
      },
    ];
    setMovies(initialMovies);
    setFilteredMovies(initialMovies);
  }, []);

  // Filter movies whenever filters change
  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  }, [titleFilter, ratingFilter, movies]);

  const addMovie = (newMovie) => {
    const movieToAdd = {
      ...newMovie,
      id: movies.length + 1,
    };
    setMovies([...movies, movieToAdd]);
    setShowForm(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Collection</h1>
        <button
          className="add-movie-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add New Movie"}
        </button>
      </header>

      {showForm ? (
        <AddMovieForm onAddMovie={addMovie} />
      ) : (
        <>
          <Filter
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            onTitleChange={setTitleFilter}
            onRatingChange={setRatingFilter}
          />
          <MovieList movies={filteredMovies} />
        </>
      )}
    </div>
  );
}

export default App;
