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
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarWrapper: {
    width: '12em',
    height: '12em',
    borderRadius: '50%',
    border: '1px solid #ffffff45',
    position: 'relative',
  },
  avatarBtn: {
    position: 'absolute',
    right: '1.5em',
    bottom: '-7px',
    padding: '0.1em',
    background: '#ffffff45',
    zIndex: '1',
    cursor: 'pointer',
  },
  popoverOption: {
    display: 'block',
    margin: '0',
    width: '100%',
    textAlign: 'right',
  },
}));
export default useStyles;
