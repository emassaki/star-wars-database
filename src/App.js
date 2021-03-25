import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import FilterForm from './components/FilterForm';
import Loading from './components/Loading';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <h1 className="m-3">Star Wars Planet Searcher</h1>
      <FilterForm />
      <Table />
      <Loading />
    </PlanetsProvider>
  );
}

export default App;
