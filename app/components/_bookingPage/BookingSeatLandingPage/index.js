import React from 'react';
// import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
import Slideshow from 'components/SlideShow';
import ads6 from 'images/ads/ads6.gif';
import ads7 from 'images/ads/ads7.jpg';
// import ads8 from 'images/ads/ads8.png';
import useStyles from './useStyles';

function BookingSeatLandingPage() {
  const collection = [{ src: ads6 }, { src: ads7 }];
  return (
    <Slideshow
      input={collection}
      ratio="17:7"
      mode="automatic"
      timeout="3000"
    />
  );
}

BookingSeatLandingPage.propTypes = {};

export default BookingSeatLandingPage;
