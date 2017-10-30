import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const api_url = process.env.API_URL || 'http://localhost:5000';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  componentDidMount(){
    fetch(api_url + "/cars")
     .then(results => {
      return results.json()
    })
    .then(data => {
        let cars = data.map((car, index) => {
          return (
            <li key={index} className="car-list-item">
              <Link to={`/cars/${car._id}`}>{car.name}</Link>
            </li>
          )
        });
        this.setState({cars: cars});
      })
  }

  render() {
    return (
      <ul>
        {this.state.cars}
      </ul>
    );
  }
}

export default CarList;
