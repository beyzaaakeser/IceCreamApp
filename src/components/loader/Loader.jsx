import React from 'react';
import './Loader.css';
const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center my-20">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
