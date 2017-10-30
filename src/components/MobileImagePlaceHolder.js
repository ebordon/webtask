import React, {Component} from 'react';

class MobileImagePlaceHolder extends Component {
  render() {
    const {picture} = this.props;

    return (
      <div id="mobile-image-placeholder">
        <img className="big-image" alt={picture} src={picture} />
      </div>
    )
  }
}

export default MobileImagePlaceHolder;
