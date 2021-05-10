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
  textModel: {
    id: `${prefix}.textModel`,
    defaultMessage: 'Informe o modelo do veículo',
  },
  year: {
    id: `${prefix}.year`,
    defaultMessage: 'Ano de fabricação',
  },
  textYear: {
    id: `${prefix}.textYear`,
    defaultMessage: 'Informe o ano de fabricação do veículo',
  },
  price: {
    id: `${prefix}.price`,
    defaultMessage: 'Preço',
  },
  textPrice: {
    id: `${prefix}.textPrice`,
    defaultMessage: 'Informe o preço do veículo',
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