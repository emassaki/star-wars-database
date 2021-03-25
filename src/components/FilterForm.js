import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import ActiveFilters from './ActiveFilters';
import FilterFormNumeric from './FilterFormNumeric';
import SortForm from './SortForm';

export default function FilterForm() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  const handleChange = (e) => {
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      <FilterFormNumeric />
      <SortForm />
      <form className="mx-3">
        <input
          type="text"
          value={ name }
          onChange={ handleChange }
          data-testid="name-filter"
          placeholder="Search by name"
          className="form-control mb-3"
        />
      </form>
      <ActiveFilters />
    </div>
  );
}
