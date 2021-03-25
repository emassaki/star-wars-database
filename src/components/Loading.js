import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Loading() {
  const { loading } = useContext(PlanetsContext);
  if (!loading) return '';
  return (
    <div className="position-relative mt-5">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
