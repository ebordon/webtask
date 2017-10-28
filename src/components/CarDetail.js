import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ListDetail from './ListDetail';
import SaleDetails from './SaleDetails';
import ImagePlaceHolder from './ImagePlaceHolder';
import MobileImagePlaceHolder from './MobileImagePlaceHolder';
import PictureList from './PictureList'

class CarDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      pictures : ["https://drop.ndtv.com/albums/AUTO/tata_tigor_review/tigorgallerythumb_281817_181809_4088_640x480.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ezPFeqbhrhn4CLQvdlErofISKvmUEUQr10nbAxRKobrk_3zi",
                  "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/focus/2017/collections/Interior_Gallery/3-2/fcs17_pg_int_015.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2-ql-BeJnma0NczmbTI517PFBF6CJgEFaUVITtFllOVqpScC",
                  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/ford-focus-rear_0.jpg?itok=J6l_pWe4",
                  "https://di-uploads-pod1.s3.amazonaws.com/joerizzafordorlandpark/uploads/2015/03/2015-ford-focus-interior13.jpg"],
      selectedPicture: "https://drop.ndtv.com/albums/AUTO/tata_tigor_review/tigorgallerythumb_281817_181809_4088_640x480.jpg"
    };
    this.onPictureClick = this.onPictureClick.bind(this);
  }

  onPictureClick(image) {

      this.setState({ selectedPicture: image });

  }

  render() {
    const { pictures } = this.state;

    return (
      <div className="car-detail-content">
        <div className="top-box">
          <MediaQuery minWidth={1024}>
            {(matches) => {
              if (matches) {
                return <ImagePlaceHolder picture={this.state.selectedPicture} />;
              } else {
                return <MobileImagePlaceHolder picture={this.state.selectedPicture}/>;
              }
            }}
          </MediaQuery>
          <SaleDetails />
        </div>
        <MediaQuery minWidth={1024}>
          {(matches) => {
            if (matches) {
              return <PictureList onPictureClick={this.onPictureClick} images={pictures} />;
            } else {
              return <div className="callus-button"> Call us</div>;
            }
          }}
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
