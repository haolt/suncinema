import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { eraseCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

const logout = props => {
  eraseCookie(ACCESS_TOKEN);
  props.history.push('/');
};

function LogoutBtn(props) {
  return (
    <ListItem button onClick={() => logout(props)}>
      <ListItemIcon>
        <ExitToAppTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  );
}

LogoutBtn.propTypes = {};

export default withRouter(LogoutBtn);
