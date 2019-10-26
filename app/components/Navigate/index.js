import React from 'react';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExploreIcon from '@material-ui/icons/Explore';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';

import LogoutBtn from 'components/LogoutBtn';
// import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

// import { generalRoutes, authRoutes, authorizeRoutes } from './routes';

// const isLogin = false;
// const otherRoutes = isLogin ? authorizeRoutes : authRoutes;
const Navigate = () => (
  <>
    <List>
      <NavLink to="/discover" activeClassName="selected" key="discover">
        <ListItem button>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>
      </NavLink>
      <NavLink to="/movies" activeClassName="selected" key="movies">
        <ListItem button>
          <ListItemIcon>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
      </NavLink>
    </List>
    <Divider />
    <List>
      <NavLink to="/login" activeClassName="selected" key="login">
        <ListItem button>
          <ListItemIcon>
            <VpnKeyTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </NavLink>
      <NavLink to="/register" activeClassName="selected" key="Register">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
      </NavLink>
    </List>
    <Divider />
    <List>
      <NavLink to="/me" activeClassName="selected" key="me">
        <ListItem button>
          <ListItemIcon>
            <PersonPinTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Me" />
        </ListItem>
      </NavLink>
      <LogoutBtn />
      {/* <ListItem button>
        <ListItemIcon>
          <ExitToAppTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem> */}
    </List>
  </>
  // <>
  //   <List>
  //     {generalRoutes.map(route => (
  //       <NavLink to={route.id} activeClassName="selected" key={route.id}>
  //         <ListItem button>
  //           <ListItemIcon>
  //             <ExploreIcon />
  //           </ListItemIcon>
  //           <ListItemText primary={route.title} />
  //         </ListItem>
  //       </NavLink>
  //     ))}
  //   </List>
  //   <Divider />
  //   <List>
  //     {otherRoutes.map(route => (
  //       <NavLink to={route.id} activeClassName="selected" key={route.id}>
  //         <ListItem button>
  //           <ListItemIcon>
  //             <InboxIcon />
  //           </ListItemIcon>
  //           <ListItemText primary={route.title} />
  //         </ListItem>
  //       </NavLink>
  //     ))}
  //   </List>
  // </>
);

export default Navigate;
