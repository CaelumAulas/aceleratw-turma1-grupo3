import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, useTheme } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import style from './style';
import messages from './messages';

const ActionBar = () => {
  const theme = useTheme();
  const classes = style(theme);
  return (
    <div className={classes.actionBar}>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBarButton}
        startIcon={<DeleteIcon />}
        disabled
      >
        <FormattedMessage {...messages.deleteButton} />
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        <FormattedMessage {...messages.addButton} />
      </Button>
    </div>
  );
};

export default ActionBar;
