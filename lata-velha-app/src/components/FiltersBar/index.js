import React from 'react';
import { useTheme } from '@material-ui/core';
import FilterSelect from '../Select';
import style from './style';
import messages from './messages';

const FiltersBar = () => {
  const theme = useTheme();
  const classes = style(theme);
  return (
    <div className={classes.filtersBar}>
      <FilterSelect
        options={['Fiat', 'BMW', 'Ferrari']}
        defaultOption={messages.searchBrand.defaultMessage}
        label="Marca"
        id="select-brand"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
      <FilterSelect
        options={['Uno', 'Logan', 'monza']}
        defaultOption={messages.searchModel.defaultMessage}
        label="Modelo"
        id="select-model"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
      <FilterSelect
        options={['0 - R$ 10.000,00', 'R$ 10.001,00 - R$ 20.000,00', 'R$ 20.001,00 - R$ 30.000,00', 'R$ 30.001,00 +']}
        defaultOption={messages.searchPrice.defaultMessage}
        label="Faixa de Preço"
        id="select-price"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
    </div>
  );
};

export default FiltersBar;
