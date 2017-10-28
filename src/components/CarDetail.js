import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ListDetail from './ListDetail';
import SaleDetailsComponent from './SaleDetails';
import ImagePlaceHolder from './ImagePlaceHolder';


class CarDetail extends Component {
  render() {
    return (
      <div class="car-detail-content">
        <div className="top-box">
          <MediaQuery minDeviceWidth={1024}>
            {(matches) => {
              if (matches) {
                return <ImagePlaceHolder />;
              } else {
                return <div>Media query does not match!</div>;
              }
            }}
          </MediaQuery>
          <SaleDetailsComponent />
        </div>
        <MediaQuery maxWidth={1024}>
          <p>Call Now</p>
        </MediaQuery>
        <div className="bottom-box">
          <ListDetail title="Exterior"/>
          <ListDetail title="Performance"/>
        </div>
      </div>
    );
  }
}

export default CarDetail;
