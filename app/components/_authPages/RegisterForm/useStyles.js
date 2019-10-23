import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.5em',
    background: '#344358',
    maxWidth: '360px',
    // height: '70vh',
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
