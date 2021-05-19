import React from 'react';
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core';
import FilterSelect from '../Select';
import style from './style';
import messages from './messages';

const FiltersBar = ({ brandsFilterOptions, modelsList, priceRangesList }) => {
  const theme = useTheme();
  const classes = style(theme);
  console.log('FiltersBar', brandsFilterOptions);
  return (
    <div className={classes.filtersBar} data-testid="filters-bar">
      <FilterSelect
        options={brandsFilterOptions.list}
        defaultOption={messages.searchBrand.defaultMessage}
        label="Marca"
        id="select-brand"
        onChangeHandler={brandsFilterOptions.onChange}
        value={brandsFilterOptions.value}
      />
      {/* <FilterSelect
        options={modelsList}
        defaultOption={messages.searchModel.defaultMessage}
        label="Modelo"
        id="select-model"
        onChangeHandler={() => console.log('handler')}
        value="_"
      />
      <FilterSelect
        options={priceRangesList}
        defaultOption={messages.searchPrice.defaultMessage}
        label="Faixa de Preço"
        id="select-price"
        onChangeHandler={() => console.log('handler')}
        value="_"
      /> */}
    </div>
  );
};

export default FiltersBar;

FiltersBar.propTypes = {
  // onChangeHandler: PropTypes.func.isRequired,
  brandsFilterOptions: PropTypes.shape({
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  modelsList: PropTypes.array.isRequired,
  priceRangesList: PropTypes.array.isRequired,
};
