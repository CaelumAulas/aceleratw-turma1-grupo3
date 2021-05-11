import User from "./User";

const UserFormMapper = () => {

  const map = (source) => {
    return new User(source.name, source.email, source.password);
  }
  return {
    map
  }
}

export default UserFormMapper;