import React, {Component} from 'react';

class ImagePlaceHolder extends Component {
  constructor(props){
    super(props);

    this.state = {
      picture: props.picture,
    };
  }

  render(){
    const {picture} = this.state;

    return (
      <div id="image-placeholder">
        <img className="big-image" src={picture} />
      </div>
    );
  }
}

export default ImagePlaceHolder;
