import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Badge from "./Badge";

class SaleDetails extends Component{

  render() {
    return (
      <div className="sale-details">
        <h1> Ford Focus </h1>
        <div className="car-info">
          <h6> Year </h6>
          <h4> 2012 </h4>
          <h6> Price range </h6>
          <h4> $8,500 - $9,000 </h4>
          <h6> Mileage </h6>
          <h6> 200,000 miles </h6>
        </div>
        <div className="publication-info">
          <div className="item-info">
            <h6> Item number: #1395p </h6>
            <h6> VIN: 3GNDA13D96S631406 </h6>
          </div>
          <h6> Share this car <i className="fa fa-envelope-o" aria-hidden="true"></i>  </h6>
          <div className="statistics">
          <Badge title="Views" value="37" />
          <MediaQuery minDeviceWidth={1024}>
            <Badge title="Saves" value="20" />
            <Badge title="Shares" value="15"/>
          </MediaQuery>
          <div className="clearBoth"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaleDetails;
