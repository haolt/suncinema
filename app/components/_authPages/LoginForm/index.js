/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import login from 'images/logos/login.png';
import useStyles from './useStyles';
import './styles.css';

export default function LoginForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
  };
  const resetFields = () => {
    setValues({
      password: '',
      email: '',
      showPassword: false,
    });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const submitLoginForm = () => {
    const user = { email: values.email, password: values.password };
    props.sendLoginRequest(user);
  };
  const { emailError, passwordError, error } = props;
  return (
    <form className={classes.root} autoComplete="off">
      <div className={classes.title}>
        <img src={login} alt="login" />
      </div>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          label="Email"
          id="email"
          value={values.email}
          onChange={handleChange('email')}
          className={classes.txtField}
        />
      </FormControl>
      <span className={classes.error}>{emailError}</span>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          fullWidth
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <span className={classes.error}>{passwordError}</span>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.marginBtn}
        fullWidth
        onClick={submitLoginForm}
      >
        Login
      </Button>
      {error === 'Unauthorized' && (
        <p>
          Account is invalid.
          <span onClick={resetFields}>Re-Login</span>
        </p>
      )}
    </form>
  );
}
LoginForm.propTypes = {
  error: PropTypes.string,
  passwordError: PropTypes.array,
  emailError: PropTypes.array,
  sendLoginRequest: PropTypes.func.isRequired,
};
