import React, {Component} from 'react';

class ListDetail extends Component {
  render() {
    return (
      <div className="list-detail">
        <h4>{this.props.title}</h4>
        <div className="detail-list">
            <p>Detail Car </p>
        </div>
      </div>
    );
  }
}

export default ListDetail;
