/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import style from './style';
// import messages from './messages';

const CardUser = ({ user }) => {
  const classes = style();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* <FormattedMessage
              // {...messages.contentDashboard}
              values={{
                total: <strong>{user.total}</strong>,
                amount: <strong>{user.amount}</strong>,
              }}
            /> */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectIntl(CardUser);
