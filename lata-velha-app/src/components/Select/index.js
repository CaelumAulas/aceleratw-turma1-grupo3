import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  NativeSelect,
  useTheme,
} from '@material-ui/core';
import style from './style';

const Select = ({
  options,
  defaultOption,
  label,
  id,
  onChangeHandler,
  value,
}) => {
  const theme = useTheme();
  const classes = style(theme);

  return (
    <FormControl margin="normal" data-testid={id}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <NativeSelect
        className={classes.select}
        id={id}
        value={value}
        onChange={onChangeHandler}
        data-testid={`${id}-select`}
      >
        <option value="_" disabled>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
