import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import { eraseCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';
import styles from '../Navigate/styles';

const logout = props => {
  eraseCookie(ACCESS_TOKEN);
  props.history.push('/');
};

function LogoutBtn(props) {
  const { classes } = props;
  return (
    <Tooltip title="Logout">
      <ListItem button onClick={() => logout(props)}>
        <ListItemIcon>
          <ExitToAppTwoToneIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.title} primary="Logout" />
      </ListItem>
    </Tooltip>
  );
}

LogoutBtn.propTypes = {};

export default withRouter(withStyles(styles)(LogoutBtn));