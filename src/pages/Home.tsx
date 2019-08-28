import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <Link to="/list">List</Link>
    </>
  );
};

export default HomePage;
