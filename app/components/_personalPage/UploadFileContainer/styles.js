const styles = {
  avatar: {
    width: '150px',
    height: '150px',
  },
  avatarWrapper: {
    width: '12em',
    height: '12em',
    borderRadius: '50%',
    border: '1px solid #ffffff45',
    position: 'relative',
  },
  avatarBtn: {
    position: 'absolute',
    right: '1.5em',
    bottom: '-7px',
    padding: '0.1em',
    // background: '#ffffff45',
    zIndex: '1',
    cursor: 'pointer',
  },
  uploadIcon: {
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
};
export default styles;
