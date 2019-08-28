import React from 'react';
import { Link } from 'react-router-dom';

const ListPage: React.FunctionComponent = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <ListItems />
    </>
  );
};

const ListItems = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
    return (
      <div key={'item' + x}>{x}</div>
    );
  });

  return <div>{items}</div>;
};

export default ListPage;
