import UserView from "../../../models/User/UserView";

const UserService = (userRepository) => {
  // should this be async?
  const listAll = async () => {
    console.log('UserService listAll');
    const userViewList = [];
    const usersJson = await userRepository.findAll();
    usersJson.forEach(user => {
      userViewList.push(UserView(user.id, user.name, user.email));
    });
    return userViewList;
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