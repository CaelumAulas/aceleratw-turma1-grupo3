const API_URL = '';


const UserService = (userRepository) => {
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

export default UserService;