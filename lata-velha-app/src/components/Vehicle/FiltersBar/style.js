import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  filtersBar: {
    width: 'calc(100%)', // ajustar este calculo
    minHeight: '50px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    background: 'red',
  },
}));

export default useStyles;
