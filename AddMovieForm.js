// src/components/AddMovieForm.js
import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description) {
      onAddMovie(newMovie);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Poster URL</label>
          <input
            type="text"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        <div className="form-group">
          <label>Rating (0-10)</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={newMovie.rating}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
