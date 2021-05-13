import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardUser from '../../../components/CardUser';
import PropTypes from 'prop-types';
import style from './style';

const ListUserPage = (props) => {
  const classes = style();
  const { usersList } = props;
  return (
    <>
      <div className={classes.container}>
        {usersList.map(user => <CardUser key={user.id} user={user} />)}
      </div>
      <ActionBar />
    </>
  );
}

ListUserPage.propTypes = {
  usersList: PropTypes.array.isRequired
}

// CardDashboard.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     brand: PropTypes.string.isRequired,
//     total: PropTypes.number.isRequired,
//     amount: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default ListUserPage;