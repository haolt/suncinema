import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    padding: theme.spacing(2, 0),
  },
  keywordsInput: {
    color: '#333',
    fontWeight: '600',
    fontSize: '1.3em',
    border: 'none',
    width: '20%',
    height: '2.7em',
    transition: '0.2s',
    padding: '5px 10px',
    borderRadius: '2em',
    outline: 'none',
    '&:focus': {
      width: '25%',
      transition: '0.2s',
      outline: 'none',
    },
  },
}));
export default useStyles;
