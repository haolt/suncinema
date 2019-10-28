import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

import logo from 'images/logos/logo_2.png';
import logoMini from 'images/logos/logo_0.png';
import GlobalStyle from 'global-styles';
import Navigate from 'components/Navigate';
import DiscoverPage from 'containers/DiscoverPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import MoviePage from 'containers/MoviePage/Loadable';
import MovieDetailPage from 'containers/MovieDetailPage/Loadable';
import BookingPage from 'containers/BookingPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PersonalPage from 'containers/PersonalPage/Loadable';
import BookingSeatLandingPage from 'components/_bookingPage/BookingSeatLandingPage';
import useStyles from './useStyles';

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <GlobalStyle />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <Tooltip title="Suncinema">
            <Link
              to="/"
              className={clsx(classes.logo, { [classes.hide]: !open })}
            >
              <img src={logo} alt="logo" />
            </Link>
          </Tooltip>
          <IconButton
            onClick={handleDrawerClose}
            className={clsx({ [classes.hide]: !open })}
          >
            {theme.direction === 'rtl' ? (
              <Tooltip title="Open">
                <ChevronRightIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Close">
                <ChevronLeftIcon />
              </Tooltip>
            )}
          </IconButton>
          <IconButton
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Tooltip title="Suncinema">
              <img src={logoMini} alt="logo" />
            </Tooltip>
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <Navigate />
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/" component={DiscoverPage} />
          <Route exact path="/discover" component={DiscoverPage} />
          <Route exact path="/movies" component={MoviePage} />
          <Route path="/movies/:id" component={MovieDetailPage} />
          <Route exact path="/booking" component={BookingSeatLandingPage} />
          <Route exact path="/booking/:id" component={BookingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/me" component={PersonalPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
