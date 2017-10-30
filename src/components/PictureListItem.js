import React, { Component } from 'react';

class PictureListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      picture: props.image,
    };
    this.onImageClicked = this.onImageClicked.bind(this);
  }

  onImageClicked() {
    const { image } = this.props;
    const { onPictureClick } = this.props;

    onPictureClick(image);
  }

  render() {
    const { image } = this.props;

    return (
      <div className="picture-list-item">
        <img className="small-image" alt={image} onClick={this.onImageClicked} src={image} />
      </div>
    );
  }
}

export default PictureListItem;
