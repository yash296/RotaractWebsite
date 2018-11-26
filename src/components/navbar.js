import React, { Component } from 'react';
import Menu from '../extras/menu.svg';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    //Hamburger menu toggle

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light1">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className=" navbar-nav  container">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Our Club
                </button>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    to="/MeetingAndInfo"
                    className="nav-link dropdown-item"
                  >
                    Meeting info & location
                  </NavLink>
                  <NavLink to="/History" className="nav-link dropdown-item">
                    History
                  </NavLink>

                  <NavLink to="/Contacts" className="nav-link dropdown-item">
                    Contact
                  </NavLink>
                  <NavLink to="/Committee" className="nav-link dropdown-item">
                    Committees
                  </NavLink>
                  <NavLink to="/Birthdays" className="nav-link dropdown-item">
                    Birthdays
                  </NavLink>
                  <NavLink to="/Downloads" className="nav-link dropdown-item">
                    Downloads
                  </NavLink>
                  <NavLink to="/Directory" className="nav-link dropdown-item">
                    Directory
                  </NavLink>
                  <NavLink to="/ClubExecs" className="nav-link dropdown-item">
                    Club executives and directors
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  What is Rotary
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    to="/RotaryOverview"
                    className="nav-link dropdown-item"
                  >
                    Rotary overview
                  </NavLink>
                  <NavLink to="/OurCauses" className="nav-link dropdown-item">
                    Our causes
                  </NavLink>
                  <NavLink
                    to="/TheRotaryFoundation"
                    className="nav-link dropdown-item"
                  >
                    The Rotary Foundation
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Get Involved
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    to="/FeaturedCause"
                    className="nav-link dropdown-item"
                  >
                    Featured cause
                  </NavLink>
                  <NavLink
                    to="/ServiceProjects"
                    className="nav-link dropdown-item"
                  >
                    Service projects
                  </NavLink>
                  <NavLink to="/Give" className="nav-link dropdown-item">
                    Give
                  </NavLink>
                  <NavLink
                    to="/BecomeAMember"
                    className="nav-link dropdown-item"
                  >
                    Become a member
                  </NavLink>
                  <NavLink to="/Volunteer" className="nav-link dropdown-item">
                    Volunteer
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  News & Updates
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink to="/ClubNews" className="nav-link dropdown-item">
                    Club news
                  </NavLink>
                  <NavLink to="/Stories" className="nav-link dropdown-item">
                    Stories
                  </NavLink>
                  <NavLink to="/PhotoAlbums" className="nav-link dropdown-item">
                    Photo albums
                  </NavLink>
                  <NavLink to="/Blog" className="nav-link dropdown-item">
                    Blog
                  </NavLink>
                  <NavLink to="/Rss" className="nav-link dropdown-item">
                    Rotary news (RSS)
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Calendar
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink to="/Speakers" className="nav-link dropdown-item">
                    Speakers
                  </NavLink>
                  <NavLink to="/Events" className="nav-link dropdown-item">
                    {' '}
                    Events calendar
                  </NavLink>
                  <NavLink
                    to="/RotaryCalendar"
                    className="nav-link dropdown-item"
                  >
                    Rotary calendar
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            id="btnoutline"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <img src={Menu} alt={Menu} />
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
