const API_URL = '';

const UserRepository = (httpClient) => {

  const findByEmail = (email) => {

  }

  const findAll = () => {

  }

  const save = () => {

  }

  const remove = () => {

  }

  return {
    findByEmail,
    findAll,
    save,
    remove
  }
}

const UserService = (httpClient, userRepository) => {
  const listAll = () => {
    return userRepository.findAll();
  }


  const create = (userForm) => {
    if (userRepository.findByEmail(userform.email)) {
      
    }
    const newUser = userRepository.save(userForm);
    return newUser;
  }

  const update = (userForm) => {
    if (userRepository.findByEmail(userform.email)) {
      
    }
  }

  const remove = (userId) => {
    
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}