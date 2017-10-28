import React, {Component} from 'react';

class ImagePlaceHolder extends Component {

  render(){
    const {picture} = this.props;

    return (
      <div id="image-placeholder">
        <img className="big-image" src={picture} />
      </div>
    );
  }
}

export default ImagePlaceHolder;
