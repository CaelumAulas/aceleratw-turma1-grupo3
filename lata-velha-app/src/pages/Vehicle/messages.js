import { defineMessages } from 'react-intl';

const prefix = 'components.Vehicle';

export default defineMessages({
  createVehicleTitle: {
    id: `${prefix}.createVehicleTitle`,
    defaultMessage: 'Adicionar novo veículo',
  },
  brand: {
    id: `${prefix}.brand`,
    defaultMessage: 'Marca',
  },
  textBrand: {
    id: `${prefix}.textBrand`,
    defaultMessage: 'Escolha a marca',
  },
  model: {
    id: `${prefix}.model`,
    defaultMessage: 'Modelo',
  },
  year: {
    id: `${prefix}.year`,
    defaultMessage: 'Ano de fabricação',
  },
  price: {
    id: `${prefix}.price`,
    defaultMessage: 'Preço',
  },
  buttonCancel: {
    id: `${prefix}.buttonCancel`,
    defaultMessage: 'Cancelar',
  },
  buttonCad: {
    id: `${prefix}.buttonCad`,
    defaultMessage: 'Cadastrar',
  },
});
