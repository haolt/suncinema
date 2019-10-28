import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './useStyles';
import categories from './categories';

function MovieCategories(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.sendSortMovieRequest({
      sort: newValue + 1,
    });
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="secondary"
        textColor="secondary"
      >
        {categories.map(cat => (
          <Tab
            key={cat.id}
            label={cat.name}
            icon={<FavoriteIcon />}
            className={classes.tabItem}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

MovieCategories.propTypes = {
  sendSortMovieRequest: PropTypes.func.isRequired,
};

export default MovieCategories;
