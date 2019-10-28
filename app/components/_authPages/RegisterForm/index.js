/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
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

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import register from 'images/logos/register.png';
import useStyles from './useStyles';

export default function RegisterForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    password_confirmation: '',
    email: '',
    showPassword: false,
  });

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const submitRegisterForm = () => {
    props.sendRegisterRequest(values);
  };
  const { emailError, passwordError, nameError } = props;

  return (
    <form className={classes.root} autoComplete="off">
      <div className={classes.title}>
        <img src={register} alt="register" />
      </div>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          label="Name"
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          autoComplete="off"
        />
      </FormControl>
      <span className={classes.error}>{nameError}</span>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          label="Email"
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          autoComplete="off"
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
      <span className={classes.error}>{passwordError
        ? passwordError.length === 2
          ? passwordError[0]
          : ''
        : ''}</span>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-password">Retype password</InputLabel>
        <Input
          fullWidth
          id="password_confirmation"
          type="password"
          value={values.password_confirmation}
          onChange={handleChange('password_confirmation')}
        />
      </FormControl>
      <span className={classes.error}>{passwordError ? passwordError[passwordError.length - 1] : ''}</span>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.marginBtn}
        fullWidth
        onClick={submitRegisterForm}
      >
        Register
      </Button>
    </form>
  );
}

RegisterForm.propTypes = {
  sendRegisterRequest: PropTypes.func.isRequired,
  nameError: PropTypes.array,
  passwordError: PropTypes.array,
  emailError: PropTypes.array,
};
