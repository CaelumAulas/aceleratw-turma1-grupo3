import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  root: {
    minWidth: 250,
    maxWidth: 250,
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
