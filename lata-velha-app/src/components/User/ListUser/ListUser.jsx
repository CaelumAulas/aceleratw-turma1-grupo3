import React from 'react';
import CardUser from './CardUser';
import style from './style';

const ListUser = () => {
  const classes = style();
  const data = [
    {
      id: Math.random(), name: 'fiat', email: 'somerandom@email.com',
    },
    {
      id: Math.random(), name: 'BMW', email: 'hello@email.com',
    },
    {
      id: Math.random(), name: 'Volks', email: 'hi@email.com',
    },
  ];

  return (
    <div className={classes.container}>
      {data.map((user) => <CardUser key={user.id} user={user} />)}
    </div>
  );
};

export default ListUser;
