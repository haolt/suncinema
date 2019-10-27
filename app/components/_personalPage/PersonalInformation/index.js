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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import UpdateUser from 'containers/UpdateUser';

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
                <MoreVertIcon />
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
          <CardContent>
            <Divider />
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <div className={classes.avatarWrapper}>
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
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="******" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={phone_number && phone_number} />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List dense={true}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
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
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`#sunner_${id}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={visa_number && visa_number} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
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
          <CardHeader title="Action Histories" />
          <CardContent>
            <Divider />
            <Typography component="p">
              lorem sdf well meaning and kindly.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Dialog
        open={openDialoge}
        onClose={handleCloseDialoge}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {contentDialogeType === 'update_user'
            ? 'Update Information'
            : 'Change Password'}
        </DialogTitle>
        {contentDialogeType === 'update_user' ? (
          <UpdateUser
            user={props.user}
            handleCloseDialoge={handleCloseDialoge}
          />
        ) : (
          'bjnkl'
        )}
      </Dialog>
    </Grid>
  );
}

PersonalInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PersonalInformation;
