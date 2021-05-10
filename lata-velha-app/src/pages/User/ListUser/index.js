import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardUser from '../../../components/CardUser';
import style from './style';

const ListUser = () => {
  const classes = style();
  const data = [
    {
      id: Math.random(), name: 'Fulano', email: 'somerandom@email.com',
    },
    {
      id: Math.random(), name: 'Ciclano', email: 'hello@email.com',
    },
    {
      id: Math.random(), name: 'Osmar', email: 'hi@email.com',
    },
  ];

  return (
    <>
    <div className={classes.container}>
      {data.map((user) => <CardUser key={user.id} user={user} />)}
    </div>
    <ActionBar />
    </>
  );
};

export default ListUser;
