import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
            // className={clsx(classes.menuButton, {
            //   [classes.hide]: open,
            // })}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <div className={classes.navbar}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search movies"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div>
                <IconButton
                >
                  <Badge badgeContent={2} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            </div>
          </Hidden>
        </Toolbar> */}
      </AppBar>
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
          <Link
            to="/"
            className={clsx(classes.logo, { [classes.hide]: !open })}
          >
            <img src={logo} alt="logo" />
          </Link>
          <IconButton
            onClick={handleDrawerClose}
            className={clsx({ [classes.hide]: !open })}
          >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <IconButton
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <img src={logoMini} alt="logo" />
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <Navigate />
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
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
