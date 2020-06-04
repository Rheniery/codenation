import React from 'react';

const FilterButton = ({ text, label, onFilter, filter }) => {
  function handleClick() {
    onFilter(filter === label ? '' : label);
  }

  return (
    <button
      onClick={handleClick}
      className={`filters__item ${filter === label ? 'is-selected' : ''}`}
    >
      {text}
      <i className="fas fa-sort-down" />
    </button>
  );
};

export default FilterButton;