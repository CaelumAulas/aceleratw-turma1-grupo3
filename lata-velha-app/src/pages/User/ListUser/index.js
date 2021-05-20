import React, { useContext, useEffect, useState } from 'react';
import ListUserPage from './ListUserPage';
import HttpContext from '../../../contexts/HttpContext';
import UserRepository from '../../../api/services/User/UserRepository';
import UserService from '../../../api/services/User/UserService';

const ListUser = () => {
  const httpClient = useContext(HttpContext);
  const userRepository = UserRepository(httpClient);
  const userService = UserService(userRepository);
  
  // todo: remember to user observable pattern!!!
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    userService.listAll().then(list => {
      setUsersList(list);
    });
  }, []);

  const onEditHandler = (userId) => {
    console.log("ListUserPage-> onEditHandler", userId);
  }

  const onDeleteHandler = (userId) => {
    userService.remove(userId);
  }

  return (
    <ListUserPage usersList={usersList} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} />
  );
};

export default ListUser;

