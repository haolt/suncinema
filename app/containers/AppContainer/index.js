/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

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

import { getCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

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

import { makeSelectLoginStatus } from 'containers/LoginPage/selectors';
import { sendGetUserInfoRequest } from 'containers/PersonalPage/actions';

import useStyles from './useStyles';

import makeSelectAppContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function AppContainer(props) {
  useInjectReducer({ key: 'appContainer', reducer });
  useInjectSaga({ key: 'appContainer', saga });
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // status = (props.isLoginSuccess && getCookie(ACCESS_TOKEN)) || getCookie(ACCESS_TOKEN);
  });

  return (
    <>
      <Helmet>
        <title>AppContainer</title>
        <meta name="description" content="Description of AppContainer" />
      </Helmet>
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
          <Navigate isLoginSuccess={props.isLoginSuccess} />
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
    </>
  );
}

AppContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isLoginSuccess: PropTypes.bool,
  sendGetUserInfoRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appContainer: makeSelectAppContainer(),
  isLoginSuccess: makeSelectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendGetUserInfoRequest: () => dispatch(sendGetUserInfoRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AppContainer);
