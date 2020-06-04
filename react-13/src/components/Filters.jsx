import React from 'react';
import FilterButton from './FilterButton';

const Filters = ({ onQuery, onFilter, filter }) => {
  const filters = [
    { text: 'Nome', label: 'name' },
    { text: 'País', label: 'country' },
    { text: 'Empresa', label: 'company' },
    { text: 'Departamento', label: 'department' },
    { text: 'Data de admissão', label: 'admissionDate' },
  ];

  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            onChange={(e) => onQuery(e.target.value)}
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
          />
          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>
        {filters.map(({ text, label }, idx) => (
          <FilterButton
            key={`${idx}-${label}`}
            text={text}
            label={label}
            onFilter={onFilter}
            filter={filter}
          />
        ))}
      </section>
    </div>
  );
};

export default Filters;