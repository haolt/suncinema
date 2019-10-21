import React from 'react';

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

import useStyles from './useStyles';

export default function RegisterForm() {
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
    console.log(values);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3">
        Register
      </Typography>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          label="Name"
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          label="Email"
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
        />
      </FormControl>
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
      <Button
        variant="outlined"
        size="medium"
        className={classes.marginBtn}
        fullWidth
        onClick={submitRegisterForm}
      >
        Login
      </Button>
    </div>
  );
}