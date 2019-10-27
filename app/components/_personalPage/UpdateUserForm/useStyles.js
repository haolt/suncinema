import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.5em',
    margin: 'auto',
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  marginBtn: {
    margin: theme.spacing(2),
  },
  groupBtns: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
export default useStyles;
