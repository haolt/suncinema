import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.5em',
    background: '#344358',
    maxWidth: '360px',
    // height: '50vh',
    margin: 'auto',
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  txtField: {
    color: '#fff',
  },
  marginBtn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  title: {
    width: '30%',
    minWidth: '100px',
    margin: 'auto',
  },
  error: {
    color: '#bf2e2d',
  },
}));
export default useStyles;
