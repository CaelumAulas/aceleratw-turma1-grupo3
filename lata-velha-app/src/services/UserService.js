import UserFormMapper from "../models/User/UserFormMapper"

const API_URL = '';

const UserService = (httpClient) => {

  const userFormMapper = UserFormMapper();

  const listAll = () => {

  }

  const showById = (id) => {

  }

  const create = (userForm) => {
    // check if user exists by email
    if (httpClient.get(API_URL, user)) {
      
    }
    const createdUser = userFormMapper.map(userForm);
    httpClient.post(createdUser)

  }

  const update = (userForm) => {
    
  }

  return {
    listAll,
    showById,
    create,
    update,
  }
}