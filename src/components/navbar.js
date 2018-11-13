import React from 'react';
import Menu from '../extras/menu.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
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
              <NavLink to="/RotaryOverview" className="nav-link">
                <a className="dropdown-item">Rotary overview</a>
              </NavLink>
              <NavLink to="/OurCauses" className="nav-link">
                <a className="dropdown-item">Our causes</a>
              </NavLink>
              <NavLink to="/TheRotaryFoundation" className="nav-link">
                <a className="dropdown-item">The Rotary Foundation</a>
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
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
              <NavLink to="/FeaturedCause" className="nav-link">
                <a className="dropdown-item">Featured cause</a>
              </NavLink>
              <NavLink to="/ServiceProjects" className="nav-link">
                <a className="dropdown-item">Service projects</a>
              </NavLink>
              <NavLink to="/Give" className="nav-link">
                <a className="dropdown-item">Give</a>
              </NavLink>
              <NavLink to="/BecomeAMember" className="nav-link">
                <a className="dropdown-item">Become a member</a>
              </NavLink>
              <NavLink to="/Volunteer" className="nav-link">
                <a className="dropdown-item">Volunteer</a>
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
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
              <NavLink to="/ClubNews" className="nav-link">
                <a className="dropdown-item">Club news</a>
              </NavLink>
              <NavLink to="/Stories" className="nav-link">
                <a className="dropdown-item">Stories</a>
              </NavLink>
              <NavLink to="/PhotoAlbums" className="nav-link">
                <a className="dropdown-item">Photo albums</a>
              </NavLink>
              <NavLink to="/Blog" className="nav-link">
                <a className="dropdown-item">Blog</a>
              </NavLink>
              <NavLink to="/Rss" className="nav-link">
                <a className="dropdown-item">Rotary news (RSS)</a>
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Calendar
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink to="/Speakers" className="nav-link">
                <a className="dropdown-item">Speakers</a>
              </NavLink>
              <NavLink to="/Events" className="nav-link">
                {' '}
                <a className="dropdown-item">Events calendar</a>
              </NavLink>
              <NavLink to="/RotaryCalendar" className="nav-link">
                <a className="dropdown-item">Rotary calendar</a>
              </NavLink>
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
