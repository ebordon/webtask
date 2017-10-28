import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Navbar extends Component {

  render() {
      return (
        <div className='navbar'>
            <ul className="navbar-item-right">
              <MediaQuery minWidth={1024}>
                <li className='black-bg-item'>
                    <a href='#'> <i className="fa fa-search" aria-hidden="true"> </i> </a>
                </li>
              </MediaQuery>
              <li className='orange-bg-item'>
                <a href='#'> <i className="fa fa-map-marker" aria-hidden="true"></i> </a>
              </li>
              <li className='orange-bg-item'>
                <a href='#'> <i className="fa fa-phone" aria-hidden="true"></i> </a>
              </li>
              <MediaQuery minWidth={1024}>
                <li className='orange-bg-item'>
                  <a href='#'> <i className="fa fa-clock-o" aria-hidden="true"> </i> </a>
                </li>
              </MediaQuery>
            </ul>
        </div>
      );
    }
  }

export default Navbar;
