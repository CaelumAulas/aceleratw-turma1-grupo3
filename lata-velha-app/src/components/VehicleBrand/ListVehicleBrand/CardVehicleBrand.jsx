import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const CardVehicleBrand = ({ brand }) => {
  const classes = style();

  const editVehicleBrand = () => {
    console.log('editei');
  };

  const deleteVehicleBrand = () => {
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
          <Typography variant="h5" component="h2" className={classes.name}>
            {brand.name}
          </Typography>
        )}
      />
      <CardActions className={classes.cardActions}>
        <IconButton aria-label={`editar marca ${brand}`} onClick={editVehicleBrand}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar marca ${brand}`} onClick={deleteVehicleBrand}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardVehicleBrand;

CardVehicleBrand.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
