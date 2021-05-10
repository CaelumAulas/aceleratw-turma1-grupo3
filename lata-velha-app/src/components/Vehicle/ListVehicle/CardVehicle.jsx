import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  AttachMoney as AttachMoneyIcon,
  CalendarToday as CalendarTodayIcon,
} from '@material-ui/icons';
import style from './style';
import messages from '../messages';
import formatFloatToBrazilianCurrency from '../../../utils/currency';

const CardVehicle = ({ vehicle }) => {
  const theme = useTheme();
  const classes = style(theme);
  const [checked, setChecked] = useState(false);
  const editVehicle = () => {
    console.log('editei');
  };

  const deleteVehicle = () => {
    console.log('deletei');
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" src={vehicle.brand.url} alt={`${messages.defaultAlt.defaultMessage} ${vehicle.brand.name}`} />
        )}
        action={(
          <Checkbox onChange={(e) => setChecked(e.target.checked)} aria-label={
            checked ? `${messages.checkboxChecked.defaultMessage} ${vehicle.model}`
              : `${messages.checkboxUnchecked.defaultMessage} ${vehicle.model}`} checked={checked} />
        )}
        title={(
          <>
            <Typography variant="h6" component="h2" className={classes.model}>
              {vehicle.model}
            </Typography>
          </>
        )}
        subheader={vehicle.brand.name}
      />
      <Divider />
      <CardContent className={classes.cardContent}>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AttachMoneyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={
            <Typography variant="h6" component="h3">{`${formatFloatToBrazilianCurrency(vehicle.price)}`}</Typography>} secondary={messages.currentPrice.defaultMessage} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CalendarTodayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={vehicle.year} secondary={messages.vehicleYear.defaultMessage} />
          </ListItem>
        </List>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label={`editar veiculo ${vehicle.model}`} onClick={editVehicle}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar veiculo ${vehicle.model}`} onClick={deleteVehicle}>
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
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default injectIntl(CardVehicle);
