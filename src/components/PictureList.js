import React, { Component } from 'react';
import PictureListItem from './PictureListItem';

class PictureList extends Component {
  constructor(props){
    super(props);

    this.state = {
      picture: props.image,
    };
    this.onImageClicked = this.onImageClicked.bind(this);
  }

  onImageClicked(image) {

    const { onPictureClick } = this.props;

    onPictureClick(image);
    this.setState({picture:image})
  }

  render() {
    const { images } = this.props;

    return (
      <div className="picture-list">
      {images.map((image) =>
          <PictureListItem
            image={image}  onPictureClick={this.onImageClicked}
          />
      )}
      </div>
    );
  }
}

export default PictureList;
