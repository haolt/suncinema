import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow: 'none',
    padding: theme.spacing(2, 0),
  },
  textField: {
    color: '#ffffff',
  },
  heading: {
    textAlign: 'right',
    display: 'inline-block',
  },
  advanceOptions: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  advanceItem: {
    boxShadow: 'none',
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  label: {
    margin: 0,
  },
}));
export default useStyles;
