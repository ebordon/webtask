import React, {Component} from 'react';

class Badge extends Component {

  render() {
    return (
      <div className="car-badge">
        <h6 className="badge-title"> {this.props.title} </h6>
        <h2 className="counter"> {this.props.value} </h2>
      </div>
    )
  }
}

export default Badge;
