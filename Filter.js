// src/components/Filter.js
import React from "react";

const Filter = ({
  titleFilter,
  ratingFilter,
  onTitleChange,
  onRatingChange,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="title-filter">Filter by Title:</label>
        <input
          id="title-filter"
          type="text"
          placeholder="Search movies..."
          value={titleFilter}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="rating-filter">Minimum Rating: {ratingFilter}</label>
        <input
          id="rating-filter"
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={ratingFilter}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
        />
        <div className="rating-display">
          <span>0</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
