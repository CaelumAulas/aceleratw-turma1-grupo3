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
    update,
    remove,
  }
}

export default UserService;