import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button, useTheme } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import style from './style';
import messages from './messages';

const ActionBar = () => {
  const { path } = useRouteMatch()
  const theme = useTheme();
  const classes = style(theme);

  const renderBtnDelete = () => {
    return path !== '/usuarios' && (
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBarButton}
        startIcon={<DeleteIcon />}
        disabled
      >
        <FormattedMessage {...messages.deleteButton} />
      </Button>
    )
  }

  return (
    <div className={classes.actionBar}>
      { renderBtnDelete() }

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        component={Link}
        to={`${path}/adicionar`}
        className={classes.addButton}
      >
        <FormattedMessage {...messages.addButton} />
      </Button>
    </div>
  );
};

export default ActionBar;
