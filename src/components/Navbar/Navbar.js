import React, { useContext, useState } from 'react';
import Link from 'next/link';
import UserContext from '../UserContext';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
} from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Navbar = props => {
  const { user, signOut } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // const logout = e => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   props.history.push('/campgrounds');
  // };

  // const token = localStorage.getItem('token');

  return (
    <>
      <MDBNavbar
        dark
        expand="md"
        style={{ marginBottom: '20px', backgroundColor: 'purple' }}
      >
        {/* <MDBNavbarBrand> */}
        <Link href="/">
          <a className="nav-link text-light">Yelpcamp</a>
        </Link>
        {/* </MDBNavbarBrand> */}
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            {/* <MDBNavItem> */}
            <Link href="/campgrounds">
              <a className="nav-link">Campgrounds</a>
            </Link>

            {user !== null ? (
              <li onClick={signOut}>
                <a className="nav-link">Logout</a>
              </li>
            ) : (
              <>
                <Link href="/register">
                  <a className="nav-link">Sign Up</a>
                </Link>
                <Link href="/login">
                  <a className="nav-link">Sign In</a>
                </Link>
              </>
            )}
            {/* </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
