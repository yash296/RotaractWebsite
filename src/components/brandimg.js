import React from 'react';
import Button from '@material-ui/core/Button';
import Bimg from '../extras/BrandImg.png';
const BrandImg = () => (
  <div>
    <nav className="navbar navbar-light bg-company-white">
      <a className="navbar-brand">
        <img
          src={Bimg}
          width="350"
          height="70"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button
          variant="contained"
          color="primary"
          className="btn my-2 my-sm-0"
          type="submit"
        >
          Search
        </Button>
      </form> */}
    </nav>
  </div>
);

export default BrandImg;
