import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button, useTheme } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import style from './style';
import messages from './messages';
import { USERS_PATH } from '../../routes/constants';

const ActionBar = () => {
  const path = useLocation().pathname;
  const theme = useTheme();
  const classes = style(theme);

  const renderBtnDelete = () => {
    return path !== USERS_PATH && (
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBarButton}
        startIcon={<DeleteIcon />}
        disabled
        data-testid="delete-button"
      >
        <FormattedMessage {...messages.deleteButton} />
      </Button>
    )
  }

  return (
    <div className={classes.actionBar}>
      { renderBtnDelete()}

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        component={Link}
        to={`${path}/add`}
        className={classes.addButton}
        data-testid="add-button"
      >
        <FormattedMessage {...messages.addButton} />
      </Button>
    </div>
  );
};

export default ActionBar;
