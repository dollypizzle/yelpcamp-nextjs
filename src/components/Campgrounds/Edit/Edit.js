import React, { useState, useEffect } from 'react';
import axios from '../../../axios-order';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Navbar from '../../../components/Navbar/Navbar';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

const Edit = props => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);
  const handleImageChange = event => setImage(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props]);

  const onSubmit = e => {
    e.preventDefault();
    const obj = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    const token = localStorage.getItem('token');
    axios
      .patch(`/campgrounds/${id}`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        () => Router.push(`/campground/${id}`)
        //props.history.push('/campgrounds/' + props.match.params.id + '/show')
      );
  };

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={onSubmit}>
                  <p className="h4 text-center py-2">Edit {name}</p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      value={image}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Submit
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Edit;
