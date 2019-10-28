/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SimCardIcon from '@material-ui/icons/SimCard';
import RoomIcon from '@material-ui/icons/Room';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import UpdateUser from 'containers/UpdateUser';
import ChangePassword from 'containers/ChangePassword';
import UploadFile from 'components/_personalPage/UploadFile';

import useStyles from './useStyles';
const defaultAvatar =
  'https://3.bp.blogspot.com/-AEkny-9Y0Uw/W8YBZnD7oJI/AAAAAAAybmk/35h9UBHIQxk8OE_b8uqtw8gmYJ5XbOKpgCLcBGAs/s1600/AW2040870_20.gif';

function PersonalInformation(props) {
  // Popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const openPopover = Boolean(anchorEl);

  // Dialoge
  const [openDialoge, setOpenDialoge] = React.useState(false);
  const [contentDialogeType, setContentDialogeType] = React.useState('');
  const handleClickOpenDialoge = type => {
    setOpenDialoge(true);
    setContentDialogeType(type);
  };
  const handleCloseDialoge = () => {
    setOpenDialoge(false);
    handleClosePopover();
  };

  // Me
  const classes = useStyles();
  const {
    avatar,
    created_at,
    email,
    // email_verified_at,
    id,
    name,
    updated_at,
    phone_number,
    address,
    visa_number,
  } = props.user;
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Card className={classes.paper}>
          <CardHeader
            action={
              <IconButton variant="contained" onClick={handleClick}>
                <MoreVertIcon className={classes.icon} />
              </IconButton>
            }
            title="Account Information"
          />
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Button
              onClick={() => handleClickOpenDialoge('update_user')}
              className={classes.popoverOption}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleClickOpenDialoge('change_password')}
              className={classes.popoverOption}
            >
              Change password
            </Button>
          </Popover>
          <CardContent className={classes.content}>
            <Divider />
            <Grid container spacing={1} className={classes.contentGrid}>
              <Grid item md={3} xs={12}>
                <div className={classes.avatarWrapper}>
                  <IconButton className={classes.avatarBtn} onClick={() => handleClickOpenDialoge('upload_file')}>
                    <EditIcon />
                  </IconButton>
                  <Avatar
                    alt="avatar"
                    src={avatar || defaultAvatar}
                    className={classes.avatar}
                  />
                </div>
              </Grid>
              <Grid item md={5} xs={12}>
                <List dense={true}>
                  <ListItem>
                    <ListItemIcon>
                      <PermIdentityIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MailOutlineIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LockOpenIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="******" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneAndroidIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={phone_number && phone_number} />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List dense={true}>
                  <ListItem>
                    <ListItemIcon>
                      <WhatshotIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={`First touch: ${created_at &&
                        created_at
                          .substring(0, 10)
                          .split('-')
                          .reverse()
                          .join('/')}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LoyaltyIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={`#sunner_${id}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SimCardIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={visa_number && visa_number} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <RoomIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={address && address} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card className={classes.paper}>
          <CardHeader
            action={
              <IconButton variant="contained">
                <MoreVertIcon className={classes.icon} />
              </IconButton>
            }
            title="Action Histories"
          />
          <CardContent className={classes.content}>
            <Divider />
            <List dense={true} className={classes.contentGrid}>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={`${name} changed Info. (15mins ago)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={`${name} view movielist.(2 hours ago)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={`${name} loged in. (1 day ago)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={`${name} registered. (1 week ago)`}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Dialog
        open={openDialoge}
        onClose={handleCloseDialoge}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.dialogTitle}>
          {contentDialogeType === 'update_user'
            ? 'Update Information'
            : (contentDialogeType === 'upload_file' ? 'Update Avatar' : 'Change Password' )}
        </DialogTitle>
        {contentDialogeType === 'update_user' ? (
          <UpdateUser
            user={props.user}
            handleCloseDialoge={handleCloseDialoge}
          />
        ) : (
          contentDialogeType === 'upload_file' ? (
            <UploadFile />
          ): (
            <ChangePassword />
          )
        )}
      </Dialog>
    </Grid>
  );
}
PersonalInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PersonalInformation;
