import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  root: {
    minWidth: 250,
    maxWidth: 250,
    padding: '10px',
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  model: {
    display: 'inline-block',
    maxWidth: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'red',
  },
  year: {
    display: 'inline-block',
  },
}));

export default useStyles;
