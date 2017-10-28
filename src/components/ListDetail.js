import React, {Component} from 'react';

class ListDetail extends Component {
  render() {
    return (
      <div className="list-detail">
        <h4 className="uppercase bold">{this.props.title}</h4>
        <div className="detail-list">
            <table>
            <tbody>
              <tr>
                <td> <h4> Cilynders </h4> </td>
                <td> <h4 className="uppercase bold text-right text-black"> l4 </h4> </td>
              </tr>
              <tr>
                <td> <h4> City MPG </h4> </td>
                <td> <h4 className="uppercase bold text-right text-black"> 20 MPG </h4> </td>
              </tr>
              <tr>
                <td> <h4> Highway </h4> </td>
                <td> <h4 className="uppercase bold text-right text-black"> 25 MPG </h4> </td>
              </tr>
              <tr>
                <td> <h4> Engine </h4> </td>
                <td> <h4 className="uppercase bold text-right text-black"> 1.3 </h4> </td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default ListDetail;
