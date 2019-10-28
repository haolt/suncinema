import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    background: '#334458',
    width: '50%',
    minWidth: '300px',
  },
  title: {
    fontSize: '1.3em',
    color: '#fff',
    fontWeight: '300',
  },
  btns: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    margin: '2em 1em',
    cursor: 'pointer',
  },
}));
export default useStyles;