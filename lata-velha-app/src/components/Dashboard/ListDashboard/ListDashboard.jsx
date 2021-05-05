import React from 'react';
import CardDashboard from './CardDashboard';
import style from './style';

const ListDashboard = () => {
  const classes = style();
  const data = [
    {
      id: Math.random(), brand: 'fiat', total: 40000, amount: 10,
    },
    {
      id: Math.random(), brand: 'BMW', total: 100000, amount: 5,
    },
    {
      id: Math.random(), brand: 'Volks', total: 25000, amount: 2,
    },
  ];

  return (
    <div className={classes.container}>
      {data.map((item) => <CardDashboard key={item.id} item={item} />)}
    </div>
  );
};

export default ListDashboard;
