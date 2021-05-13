import UserView from "../../../models/User/UserView";

const UserService = (userRepository) => {

  const listAll = async () => {
    const userViewList = [];
    const usersJson = await userRepository.findAll();
    usersJson.forEach(user => {
      userViewList.push(UserView(user.id, user.name, user.email));
    });
    return userViewList;
  }


  const create = async (userForm) => {
    const newUser = await userRepository.save(userForm);
    return newUser;
  }

  const update = async (userForm) => {
    // if (userRepository.findByEmail(userform.email)) {

    // }
  }

  const remove = async (userId) => {
    // const existantUser = await userRepository.findById(userId);
    // console.log(existantUser);
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}

export default UserService;