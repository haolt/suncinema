import React from 'react';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';
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

// const isLogin = false;
// const otherRoutes = isLogin ? authorizeRoutes : authRoutes;
const Navigate = () => (
  <>
    <List>
      <NavLink to="/discover" activeClassName="selected" key="discover">
        <Tooltip title="Discover">
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Discover" />
          </ListItem>
        </Tooltip>
      </NavLink>
      <NavLink to="/movies" activeClassName="selected" key="movies">
        <Tooltip title="Movies">
          <ListItem button>
            <ListItemIcon>
              <LiveTvIcon />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItem>
        </Tooltip>
      </NavLink>
      <NavLink to="/booking" activeClassName="selected" key="booking">
        <Tooltip title="Booking">
          <ListItem button>
            <ListItemIcon>
              <InsertInvitationIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" />
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
              <VpnKeyTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Tooltip>
      </NavLink>
      <NavLink to="/register" activeClassName="selected" key="Register">
        <Tooltip title="Register">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
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
              <PersonPinTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Me" />
          </ListItem>
        </Tooltip>
      </NavLink>
      <LogoutBtn />
    </List>
  </>
);

export default Navigate;
