import { defineMessages } from 'react-intl';

const prefix = 'components.CardVehicle';

export default defineMessages({
  vehicleYear: {
    id: `${prefix}.vehicleYear`,
    defaultMessage: 'Ano ',
  },
  currentPrice: {
    id: `${prefix}.currentPrice`,
    defaultMessage: 'Preço Atual ',
  },
  defaultAlt: {
    id: `${prefix}.defaultAlt`,
    defaultMessage: 'Logo da marca',
  },
  checkboxChecked: {
    id: `${prefix}.checkboxChecked`,
    defaultMessage: 'Desselecionar o veículo',
  },
  checkboxUnchecked: {
    id: `${prefix}.checkboxUnchecked`,
    defaultMessage: 'Selecionar o veículo',
  },
});
