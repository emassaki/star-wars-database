import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ActiveFilters() {
  const { filters, setFilters, columns, setColumns } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const handleDeleteFilter = (column) => {
    setColumns([...columns, column]);
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter(
        (eachFilter) => eachFilter.column !== column,
      ),
    });
  };

  return (
    <div className="mx-3">
      {filterByNumericValues.map((eachFilter) => {
        const { column, comparison, value } = eachFilter;
        if (!column) return '';
        return (
          <div className="input-group mb-1" key={ column } data-testid="filter">
            <input
              type="text"
              className="form-control col-xs-3"
              value={ `${column} ${comparison} ${value}` }
              disabled
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={ () => handleDeleteFilter(column) }
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
