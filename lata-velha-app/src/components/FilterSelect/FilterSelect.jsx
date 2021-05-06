/* eslint-disable react/forbid-prop-types */
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const FilterSelect = ({ options, label }) => {
  const bla = 'bla';

  return (
    <FormControl margin="normal">
      <InputLabel htmlFor={`id_${label}`}>{label}</InputLabel>
      <NativeSelect
        id={`id_${label}`}
        value=""
        onChange={() => { console.log('onchange'); }}
      >
        <option value="_" disabled>
          Escolha a marca
          {bla}
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

FilterSelect.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default FilterSelect;
