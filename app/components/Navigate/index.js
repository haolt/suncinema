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
import LogoutBtn from 'components/LogoutBtn';
import styles from './styles';

const Navigate = props => {
  const { classes } = props;
  return (
    <>
      <List>
        <NavLink to="/discover" activeClassName="selected" key="discover">
          <Tooltip title="Discover">
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Discover" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink to="/movies" activeClassName="selected" key="movies">
          <Tooltip title="Movies">
            <ListItem button>
              <ListItemIcon>
                <LiveTvIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Movies" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink to="/booking" activeClassName="selected" key="booking">
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
        <NavLink to="/login" activeClassName="selected" key="Login">
          <Tooltip title="Login">
            <ListItem button>
              <ListItemIcon>
                <VpnKeyTwoToneIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Login" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink to="/register" activeClassName="selected" key="Register">
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
      <List>
        <NavLink to="/me" activeClassName="selected" key="me">
          <Tooltip title="Me">
            <ListItem button>
              <ListItemIcon>
                <PersonPinTwoToneIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.title} primary="Me" />
            </ListItem>
          </Tooltip>
        </NavLink>
        <LogoutBtn />
      </List>
    </>
  );
};
export default withStyles(styles)(Navigate);

Navigate.propTypes = {
  classes: PropTypes.object,
};
