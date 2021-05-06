import React from 'react';
import { Button, useTheme } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import style from './style';

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
        Deletar todos
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Adicionar Item
      </Button>
    </div>
  );
};

export default ActionBar;
