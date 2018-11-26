import React, { Component } from 'react';

export default class Menu extends Component {
  onChange = date => this.setState({ date });
  render() {
    return (
      <React.Fragment>
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
              <i className="fab fa-fw fa-youtube" />
            </a>
          </div>
        </div>
        <div>
          <br />
          <br />
          Subscribe To Our Bullitten
          <br />
          <br />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Id"
              aria-label="Email Id"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div id="menu1">
          <h6>Our Projects</h6>
          <ul className="menuulstyle">
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
            <li>
              <a className="iconColor" href="">
                NxtGn Charity Footbll
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
