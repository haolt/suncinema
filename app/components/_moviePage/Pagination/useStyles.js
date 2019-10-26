import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    padding: theme.spacing(3, 2),
  },
}));
export default useStyles;
