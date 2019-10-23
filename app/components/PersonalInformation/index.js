/* eslint-disable camelcase */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';

const defaultAvatar = 'https://3.bp.blogspot.com/-AEkny-9Y0Uw/W8YBZnD7oJI/AAAAAAAybmk/35h9UBHIQxk8OE_b8uqtw8gmYJ5XbOKpgCLcBGAs/s1600/AW2040870_20.gif';

function PersonalInformation(props) {
  const classes = useStyles();
  const {
    avatar,
    created_at,
    email,
    // email_verified_at,
    id,
    name,
    updated_at,
  } = props.user;
  console.log('Personal Information: ', props.user);
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography color="textSecondary" variant="h3" gutterBottom>
              Word of the Day
            </Typography>
            <Divider />
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <Avatar
                  alt="avatar"
                  src={avatar || defaultAvatar}
                  className={classes.avatar}
                />
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
                    <ListItemSecondaryAction>
                      <Tooltip title="Edit" aria-label="Edit">
                        <IconButton edge="end" aria-label="Edit">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email} />
                    <ListItemSecondaryAction>
                      <Tooltip title="Edit" aria-label="Edit">
                        <IconButton edge="end" aria-label="Edit">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Password: ******" />
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
                    <ListItemText
                      primary={`First touch: ${updated_at &&
                        updated_at
                          .substring(0, 10)
                          .split('-')
                          .reverse()
                          .join('/')}`}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Divider />
            <Typography variant="h5" component="h2">
              be lent
            </Typography>
            <Typography color="textSecondary">adjective</Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

PersonalInformation.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PersonalInformation;
