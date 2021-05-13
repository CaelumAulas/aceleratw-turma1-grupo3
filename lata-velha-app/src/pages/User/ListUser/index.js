import React, { useContext, useEffect, useState } from 'react';
import ListUserPage from './ListUserPage';
import HttpContext from '../../../contexts/HttpContext';
import UserRepository from '../../../api/services/User/UserRepository';
import UserService from '../../../api/services/User/UserService';

const ListUser = () => {
  // todo: remember to user observable pattern!!!
  const httpClient = useContext(HttpContext);
  const userRepository = UserRepository(httpClient);
  const userService = UserService(userRepository);
  
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    userService.listAll();
  }, []);
  return (
    <ListUserPage usersList={[]} />
  );
};

export default ListUser;

