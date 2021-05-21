import { defineMessages } from 'react-intl';

const prefix = 'components.VehicleBrand';

export default defineMessages({
  brand: {
    id: `${prefix}.brand`,
    defaultMessage: 'Marca',
  },
  textBrand: {
    id: `${prefix}.textBrand`,
    defaultMessage: 'Informe a marca do veículo',
  },
  buttonCancel: {
    id: `${prefix}.buttonCancel`,
    defaultMessage: 'Cancelar',
  },
  buttonCad: {
    id: `${prefix}.buttonCad`,
    defaultMessage: 'Cadastrar',
  },
  buttonEdit: {
    id: `${prefix}.buttonEdit`,
    defaultMessage: 'Atualizar',
  },
  createVehicleBrandTitle: {
    id: `${prefix}.createVehicleBrandTitle`,
    defaultMessage: 'Adicionar nova marca',
  },
  editVehicleBrandTitle: {
    id: `${prefix}.editVehicleBrandTitle`,
    defaultMessage: 'Alterar marca',
  },
  vehicleBrandCreated: {
    id: `${prefix}.vehicleBrandCreated`,
    defaultMessage: 'Veículo salvo com sucesso!',
  },
  vehicleBrandDeleted: {
    id: `${prefix}.vehicleBrandDeleted`,
    defaultMessage: 'Veículo excluído com sucesso!',
  },
  vehicleBrandUpdated: {
    id: `${prefix}.vehicleBrandUpdated`,
    defaultMessage: 'Veículo atualizado com sucesso!',
  },
  listError: {
    id: `${prefix}.listError`,
    defaultMessage: 'Não foi possível carregar a lista',
  },
});
