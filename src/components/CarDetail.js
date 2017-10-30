import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ListDetail from './ListDetail';
import SaleDetails from './SaleDetails';
import ImagePlaceHolder from './ImagePlaceHolder';
import MobileImagePlaceHolder from './MobileImagePlaceHolder';
import PictureList from './PictureList'

const api_url = process.env.API_URL || 'http://localhost:5000';

class CarDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      car_details: {},
      publication_stats: {},
      sale_details: {},
      pictures : [],
      selectedPicture: ""
    };
    this.onPictureClick = this.onPictureClick.bind(this);
  }

  componentDidMount(){
    const car_id = this.props.match.params.car_id;
    fetch(`${api_url}/cars/${car_id}`)
     .then(results => {
       return results.json()
    }).then(data => {
       const {name, car_details, publication_stats, sale_details, pictures} = data;
       this.setState({name, car_details, publication_stats, sale_details, pictures, selectedPicture:pictures[0]})
    })
  }

  onPictureClick(image) {

      this.setState({ selectedPicture: image });

  }

  render() {

    const { name, car_details, publication_stats, sale_details, pictures, selectedPicture } = this.state;
    if (!car_details) return (<div>Loading....</div>)
    else {
    return (
      <div className="car-detail-content">
        <div className="top-box">
          <MediaQuery minWidth={1024}>
            {(matches) => {
              if (matches) {
                return <ImagePlaceHolder picture={selectedPicture} />;
              } else {
                return <MobileImagePlaceHolder picture={selectedPicture}/>;
              }
            }}
          </MediaQuery>
          <SaleDetails details={sale_details} name={name} summary={car_details.general} stats={publication_stats}/>
        </div>
        <MediaQuery minDeviceWidth={1024}>
          {(matches) => {
            if (matches) {
              return <PictureList onPictureClick={this.onPictureClick} images={pictures} />;
            } else {
              return <div className="callus-button"> Call us</div>;
            }
          }}
        </MediaQuery>
        <div className="bottom-box">
          <ListDetail title="Exterior" details={car_details.exterior}/>
          <ListDetail title="Performance" details={car_details.performance}/>
        </div>
      </div>
    );
  }
  }
}

export default CarDetail;
