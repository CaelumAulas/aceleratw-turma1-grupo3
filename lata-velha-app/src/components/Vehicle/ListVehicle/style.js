import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '2vw',
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  price: {
    fontSize: '1.2rem',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  model: {
    maxWidth: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
