import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import ExploreIcon from '@material-ui/icons/Explore';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
// import LogoutBtn from 'components/LogoutBtn';
import Logout from 'containers/Logout';
import { getCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

import styles from './styles';

const Navigate = props => {
  const { classes, isLoginSuccess } = props;

  console.log('NAV: ', isLoginSuccess);
  return (
    <>
      <List>
        <NavLink
          className={classes.item}
          to="/discover"
          activeClassName="selected"
          key="discover"
        >
          <Tooltip title="Discover">
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Discover" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink
          className={classes.item}
          to="/movies"
          activeClassName="selected"
          key="movies"
        >
          <Tooltip title="Movies">
            <ListItem button>
              <ListItemIcon>
                <LiveTvIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Movies" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink
          className={classes.item}
          to="/booking"
          activeClassName="selected"
          key="booking"
        >
          <Tooltip title="Booking">
            <ListItem button>
              <ListItemIcon>
                <InsertInvitationIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Booking" />
            </ListItem>
          </Tooltip>
        </NavLink>
      </List>
      <Divider />
      <List>
        {isLoginSuccess || (
          <NavLink
            className={classes.item}
            to="/login"
            activeClassName="selected"
            key="Login"
          >
            <Tooltip title="Login">
              <ListItem button>
                <ListItemIcon>
                  <VpnKeyTwoToneIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.title} primary="Login" />
              </ListItem>
            </Tooltip>
          </NavLink>
        )}
        <NavLink
          className={classes.item}
          to="/register"
          activeClassName="selected"
          key="Register"
        >
          <Tooltip title="Register">
            <ListItem button>
              <ListItemIcon>
                <AccountCircleTwoToneIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Register" />
            </ListItem>
          </Tooltip>
        </NavLink>
      </List>
      <Divider />
      {(isLoginSuccess || getCookie(ACCESS_TOKEN)) && (
        <List>
          <NavLink
            className={classes.item}
            to="/me"
            activeClassName="selected"
            key="me"
          >
            <Tooltip title="Profile">
              <ListItem button>
                <ListItemIcon>
                  <PersonPinTwoToneIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.title} primary="Profile" />
              </ListItem>
            </Tooltip>
          </NavLink>
          {/* <LogoutBtn /> */}
          <Logout />
        </List>
      )}
    </>
  );
};
export default withStyles(styles)(Navigate);

Navigate.propTypes = {
  classes: PropTypes.object,
  isLoginSuccess: PropTypes.bool,
};
