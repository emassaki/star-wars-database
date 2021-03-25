import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterFormNumeric() {
  const { filters, setFilters, columns, setColumns } = useContext(PlanetsContext);

  const [filterValues, setFilterValues] = useState({});

  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterValues;

  const comparisons = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    setFilterValues({
      column: columns[0],
      comparison: 'maior que',
      value: '0',
    });
  }, [columns]);

  const handleChange = ({ target }) => {
    setFilterValues({
      ...filterValues,
      [target.name]: target.value,
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    if (!column) return;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterValues],
    });
    setColumns(columns.filter((columnName) => column !== columnName));
  };

  return (
    <form className="d-flex flex-column mx-3">
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
        className="form-select mb-1"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
        className="form-select mb-1"
      >
        {comparisons.map((comparisonOption) => (
          <option key={ comparisonOption }>{comparisonOption}</option>
        ))}
      </select>
      <input
        type="number"
        value={ value }
        name="value"
        data-testid="value-filter"
        placeholder="0"
        onChange={ handleChange }
        className="form-control mb-1"
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleFilter }
        className="btn btn-outline-primary mb-3"
      >
        Filter
      </button>
    </form>
  );
}
