import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

function UpdateUserForm(props) {
  const classes = useStyles();
  const { name, phone_number, address, visa_number } = props.user;
  const [values, setValues] = React.useState({
    name,
    phone_number: phone_number ? phone_number : '',
    address: address ? address : '',
    visa_number: visa_number ? visa_number : '',
  });

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
  };

  const submitUpdateUserForm = () => {
    props.sendUpdateUserRequest(values);
    props.sendGetUserInfoRequest();
    props.handleCloseDialoge();
  };
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item md={6} xs={12}>
        <FormControl className={classes.margin}>
          <TextField
            label="Name"
            id="name"
            value={values.name}
            onChange={handleChange('name')}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            label="Phone"
            id="phone_number"
            value={values.phone_number}
            onChange={handleChange('phone_number')}
          />
        </FormControl>
      </Grid>
      <Grid item md={6} xs={12}>
        <FormControl className={classes.margin}>
          <TextField
            label="Visa Number"
            id="visa_number"
            value={values.visa_number}
            onChange={handleChange('visa_number')}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            label="Address"
            id="address"
            value={values.address}
            onChange={handleChange('address')}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.groupBtns}>
        <Button variant="contained" color="primary" className={classes.marginBtn}
          onClick={props.handleCloseDialoge}
        >
          Cancel
        </Button>
        <Button variant="contained" color="secondary"
          onClick={submitUpdateUserForm} className={classes.marginBtn}
          disabled={values.name === ''}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
}

UpdateUserForm.propTypes = {
  user: PropTypes.object.isRequired,
  handleCloseDialoge: PropTypes.func,
  sendUpdateUserRequest: PropTypes.func.isRequired,
  sendGetUserInfoRequest: PropTypes.func.isRequired,
};

export default UpdateUserForm;