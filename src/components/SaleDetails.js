import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Badge from "./Badge";

class SaleDetails extends Component{
  render() {

    if (!this.props.summary) return (<div> Loading... </div>)
    const { min_price, max_price, item_number, vin} = this.props.details;
    const { year, mileage } = this.props.summary;
    const { views, shares, saves} = this.props.stats;
    return (
      <div className="sale-details">
        <h1> {this.props.name} </h1>
        <div className="car-info">
          <h6> Year </h6>
          <h4> {year} </h4>
          <h6> Price range </h6>
          <h4> ${min_price} - ${max_price} </h4>
          <h6> Mileage </h6>
          <h4> {mileage} miles </h4>
        </div>
        <div className="publication-info">
          <div className="item-info">
            <h6> Item number: #{item_number} </h6>
            <h6> VIN: {vin} </h6>
          </div>
          <h6> Share this car <i className="fa fa-envelope-o" aria-hidden="true"></i>  </h6>
          <div className="statistics">
          <Badge title="Views" value={views} />
          <MediaQuery minDeviceWidth={1024}>
            <Badge title="Saves" value={saves} />
            <Badge title="Shares" value={shares}/>
          </MediaQuery>
          <div className="clearBoth"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaleDetails;
