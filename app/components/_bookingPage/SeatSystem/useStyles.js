import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  seat: {
    border: '1px solid #e1e1e1',
    padding: '1em',
    height: '2em',
    width: '4em',
    margin: '0.1em 0',
    cursor: 'pointer',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paper: {
    padding: theme.spacing(2),
    color: '#fff',
    background: '#334458',
  },
  statusList: {
    margin: '1em 0',
    display: 'flex',
    alignItems: 'center',
  },
  statusTitle: {
    marginLeft: '2em',
    // color: '#333',
  },
}));
export default useStyles;
