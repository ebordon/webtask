import React, {Component} from 'react';

class ListDetail extends Component {
  render() {

    if(!this.props.details) return(<div> Loading... </div>);
    const {details} = this.props;

    return (
      <div className="list-detail">
        <h5 className="uppercase bold">{this.props.title}</h5>
          <div className="detail-list">
            <table>
              <tbody>
              {Object.keys(details).map((key, index) =>
              <tr key={index}>
                <td> <h5 className="capitalize"> {key.replace("_"," ")} </h5> </td>
                <td> <h5 className="uppercase bold text-right text-black"> {details[key]} </h5> </td>
              </tr>
              )}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default ListDetail;
