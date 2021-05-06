import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import style from './style';
import messages from '../messages';

const CardVehicle = ({ vehicle }) => {
  const classes = style();

  const editVehicle = () => {
    console.log('editei');
  };

  const deleteVehicle = () => {
    console.log('deletei');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <input type="checkbox" />
          </IconButton>
        )}
        title={(
          <>
            <Typography variant="h5" component="h2" className={classes.model}>
              <FormattedMessage
                {...messages.vehicleModel}
                values={vehicle.model}
              />
            </Typography>
            <Typography variant="subtitle1" component="h2" className={classes.year}>
              <FormattedMessage
                  {...messages.vehicleModel}
                  values={vehicle.year}
                />
            </Typography>
          </>
        )}
        subheader={vehicle.brand}
      />
      <CardContent>
        <Typography variant="h5" component="p">
          R$
          {' '}
          {vehicle.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label={`editar veiculo ${vehicle}`} onClick={editVehicle}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar veiculo ${vehicle}`} onClick={deleteVehicle}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CardVehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default injectIntl(CardVehicle);
