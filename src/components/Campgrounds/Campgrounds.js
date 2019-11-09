import React, { useState, useEffect, useContext } from 'react';
import axios from '../../axios-order';
import Body from './Body/Body';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import UserContext from '../UserContext';

const Campgrounds = () => {
  const [campground, setCampground] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get('/campgrounds')
      .then(response => {
        console.log(response.data);
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground &&
      campground.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  // // const token = localStorage.getItem('token');
  // if (!token) {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>Welcome To YelpCamp</h1>
            <p>View our hand picked campgrounds from all over the world</p>
            {user && (
              <p>
                <Link href="/new" as="/new">
                  <a className="btn btn-purple btn-lg">Add New Campground</a>
                </Link>
              </p>
            )}
          </div>
        </header>

        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tabRow()}
        </div>
      </div>
    </>
  );
};

export default Campgrounds;
