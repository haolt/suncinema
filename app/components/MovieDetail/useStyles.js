import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    background: '#334458',
  },
  view: {
    height: '80vh',
    background: '#334458',
    boxShadow: 'none',
    minHeight: '25em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewImg: {
    height: '100%',
    minHeight: '25em',
  },
  title: {
    color: '#e1e1e1',
    fontSize: '2.4em',
  },
  overview: {
    color: '#ffffffb0',
    display: 'inline-block',
    margin: '1em 0 3em',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  btn: {
    marginRight: '1em',
  }
}));
export default useStyles;