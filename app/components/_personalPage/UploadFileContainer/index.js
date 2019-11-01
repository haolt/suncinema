/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class UploadFileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { classes } = this.props;
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <Avatar alt="avatar" src={imagePreviewUrl} className={classes.avatar} />
      );
    } else {
      $imagePreview = (
        <Avatar
          alt="avatar"
          src="https://3.bp.blogspot.com/-AEkny-9Y0Uw/W8YBZnD7oJI/AAAAAAAybmk/35h9UBHIQxk8OE_b8uqtw8gmYJ5XbOKpgCLcBGAs/s1600/AW2040870_20.gif"
          className={classes.avatar}
        />
      );
    }

    return (
      <div className={classes.avatarWrapper}>
        {$imagePreview}
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={e => this.handleImageChange(e)}
        />
        <label htmlFor="raised-button-file" className={classes.avatarBtn}>
          <IconButton component="span" className={classes.uploadIcon}>
            <CameraAltIcon />
          </IconButton>
        </label>
      </div>
    );
  }
}
export default withStyles(styles)(UploadFileContainer);
