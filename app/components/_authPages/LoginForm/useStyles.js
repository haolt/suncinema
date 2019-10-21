import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.5em',
    background: '#29344A',
    maxWidth: '360px',
    height: '50vh',
    margin: 'auto',
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  marginBtn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));
export default useStyles;
