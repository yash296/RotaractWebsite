import React, { Component } from 'react';

export default class Menu extends Component {
  onChange = date => this.setState({ date });
  render() {
    return (
      <React.Fragment>
        <div id="menu1">
          <h6>Our Projects</h6>
          <ul class="menuulstyle">
            <li>
              <a className="iconColor" href="">
                Polio Plus Program
              </a>
            </li>
            <li>
              <a className="iconColor" href="">
                Kerela Flood Relief
              </a>
            </li>
          </ul>
        </div>
        <div id="menu1">
          <div>Connect with our club</div>
          <div>
            <a
              className="iconColor"
              href="https://www.facebook.com/pages/category/Nonprofit-Organization/Rotaract-Bangalore-Brigades-NxtGn-1429410307107101/"
            >
              <i className="fab fa-fw fa-facebook" />
            </a>
            <a
              className="iconColor"
              href="https://www.instagram.com/rotaractbrigadesnxtgn/"
            >
              <i className="fab fa-fw fa-instagram" />
            </a>
            <a
              className="iconColor"
              href="https://www.youtube.com/channel/UCEr1TGAgUY7FoCXm_vaSp2Q"
            >
              <i class="fab fa-fw fa-youtube" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
