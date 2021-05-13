import React from 'react';
import ListUserPage from './ListUserPage';


const ListUser = () => {
  const [usersList, setUsersList] = useState([]);
  
  useEffect(() => {
    
  }, []);
  return (
    <ListUserPage usersList={[]} />
  );
};

export default ListUser;

