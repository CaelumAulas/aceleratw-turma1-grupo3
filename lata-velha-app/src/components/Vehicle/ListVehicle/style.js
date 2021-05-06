import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 450,
    display: 'inline-block',
    margin: theme.spacing(3),
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
    display: 'inline-block',
    maxWidth: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
