import React from 'react';
import Menu from '../extras/menu.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Our Club
            </a>

            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink to="/MeetingAndInfo" className="nav-link">
                <a className="dropdown-item">Meeting info & location</a>
              </NavLink>
              <NavLink to="/History" className="nav-link">
                <a className="dropdown-item">History</a>
              </NavLink>

              <NavLink to="/Contacts" className="nav-link">
                <a className="dropdown-item">Contact</a>
              </NavLink>
              <NavLink to="/Committee" className="nav-link">
                <a className="dropdown-item">Committees</a>
              </NavLink>
              <NavLink to="/Birthdays" className="nav-link">
                <a className="dropdown-item">Birthdays</a>
              </NavLink>
              <NavLink to="/Downloads" className="nav-link">
                <a className="dropdown-item">Downloads</a>
              </NavLink>
              <NavLink to="/Directory" className="nav-link">
                <a className="dropdown-item">Directory</a>
              </NavLink>
              <NavLink to="/ClubExecs" className="nav-link">
                <a className="dropdown-item">Club executives and directors</a>
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              What is Rotary
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Rotary overview
              </a>
              <a className="dropdown-item" href="#">
                Our causes
              </a>
              <a className="dropdown-item" href="#">
                The Rotary Foundation
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Get Involved
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Featured cause
              </a>
              <a className="dropdown-item" href="#">
                Service projects
              </a>
              <a className="dropdown-item" href="#">
                Give{' '}
              </a>
              <a className="dropdown-item" href="#">
                Become a member
              </a>
              <a className="dropdown-item" href="#">
                Volunteer
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              News & Updates
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Club news
              </a>
              <a className="dropdown-item" href="#">
                Stories
              </a>
              <a className="dropdown-item" href="#">
                Photo albums
              </a>
              <a className="dropdown-item" href="#">
                Blog
              </a>
              <a className="dropdown-item" href="#">
                Rotary news (RSS)
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Callender
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Speakers
              </a>
              <a className="dropdown-item" href="#">
                Events calendar
              </a>
              <a className="dropdown-item" href="#">
                Rotary calendar
              </a>
            </div>
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler mx-auto"
        id="btnoutline"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <img src={Menu} />
      </button>
    </nav>
  </div>
);

export default NavBar;
