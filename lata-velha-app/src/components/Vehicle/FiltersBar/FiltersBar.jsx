import React from 'react';
import { useTheme } from '@material-ui/core';
import FilterSelect from '../../FilterSelect';
import style from './style';

const FiltersBar = () => {
  const theme = useTheme();
  const classes = style(theme);
  return (
    <div className={classes.filtersBar}>
      <FilterSelect
        options={['Fiat', 'BMW', 'Ferrari']}
        defaultOption="Pesquisar por Marca"
        label="Marca"
        id="select-brand"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
      <FilterSelect
        options={['Uno', 'Logan', 'monza']}
        defaultOption="Pesquisar por Modelo"
        label="Modelo"
        id="select-model"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
      <FilterSelect
        options={['0 - R$ 10.000,00', 'R$ 10.001,00 - R$ 20.000,00', 'R$ 20.001,00 - R$ 30.000,00', 'R$ 30.001,00 +']}
        defaultOption="Pesquisar por Faixa de Preço"
        label="Faixa de Preço"
        id="select-price"
        onChangeHandler={() => console.log('EH PAUUU!')}
        value="_"
      />
    </div>
  );
};

export default FiltersBar;
