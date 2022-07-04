import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from '../../../axios-order';
import Table from '../Table/Table';
import Navbar from '../../Navbar/Navbar';

import { MDBContainer } from 'mdbreact';

const Show = props => {
  const [campground, setCampground] = useState(null);

  const [user, setUser] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('user'));
    setUser(authUser);

    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props]);

  const tabRow = () => {
    return (
      campground && (
        <Table
          obj={campground}
          userId={user && user._id}
          key={campground._id}
        />
      )
    );
  };

  return (
    <>
      <Navbar />
      <MDBContainer>{tabRow()}</MDBContainer>;
    </>
  );
};

export default Show;
