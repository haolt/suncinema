import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    background: '#334458',
  },
  view: {
    height: '75vh',
    background: '#334458',
    boxShadow: 'none',
    color: '#fff',
  },
}));
export default useStyles;
