import React from 'react';
import Slideshow from 'components/SlideShow';

import ads1 from 'images/ads/ads1.jpg';
// import ads2 from 'images/ads/ads2.jpg';
import ads3 from 'images/ads/ads3.jpg';
// import ads4 from 'images/ads/ads4.png';
// import ads5 from 'images/ads/ads5.jpg';

const collection = [{ src: ads1 }, { src: ads3 }];

const Advertisement = () => (
  <div className="App">
    <Slideshow
      input={collection}
      ratio="10:3"
      mode="automatic"
      timeout="3000"
    />
  </div>
);
export default Advertisement;
