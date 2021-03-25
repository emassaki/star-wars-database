import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SortForm() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [sortBy, setSortBy] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const { column, sort } = sortBy;

  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'terrain',
    'surface_water',
    'population',
  ];

  const handleSort = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  const handleChange = ({ target }) => {
    setSortBy({
      ...sortBy,
      [target.name]: target.value,
    });
  };

  return (
    <form className="d-flex flex-column mx-3">
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-sort"
        className="form-select mb-1"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <span>
        <div className="form-check">
          <label htmlFor="ASC" className="form-check-label">
            Ascendent
            <input
              type="radio"
              data-testid="column-sort-input-asc"
              value="ASC"
              id="ASC"
              name="sort"
              onChange={ handleChange }
              className="form-check-input mb-1"
            />
          </label>
        </div>
        <div className="form-check">
          <label htmlFor="DESC" className="form-check-label">
            Descendent
            <input
              type="radio"
              data-testid="column-sort-input-desc"
              value="DESC"
              id="DESC"
              onChange={ handleChange }
              name="sort"
              className="form-check-input mb-1"
            />
          </label>
        </div>
      </span>
      <button
        type="submit"
        data-testid="column-sort-button"
        onClick={ handleSort }
        className="btn btn-outline-primary mb-3"
      >
        Sort
      </button>
    </form>
  );
}
