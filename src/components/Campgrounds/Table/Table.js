import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from '../../../axios-order';
import { useRouter } from 'next/router';

const Table = props => {
  const router = useRouter();
  const { id } = router.query;

  const deleted = () => {
    const token = localStorage.getItem('token');

    axios
      .delete(`/campgrounds/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        Router.push('/campgrounds');
      })

      .catch(err => console.log(err));
  };

  // if (redirect) {
  //   return <Redirect to={'/campgrounds'} />;
  // }

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="thumbnail">
            <h2>
              More information about:{' '}
              <strong>{props.obj.name} campground!</strong>
            </h2>
            <img
              style={{ width: '100%', height: '300px' }}
              alt=""
              className="img-responsive"
              src={props.obj.image}
            />
            <div className="caption-full">
              <h4 className="float-right">₦{props.obj.price} /Night</h4>
              <h4>{props.obj.name}</h4>
              <p>{props.obj.description}</p>

              <p>
                <Link
                  style={{ marginRight: '5px' }}
                  href={'/campgrounds/'}
                  to={'/campgrounds/'}
                  className="btn btn-success"
                >
                  <a className="btn btn-success">Go Back</a>
                </Link>
                {props.userId === props.obj.owner && (
                  <>
                    <Link
                      href={`/edit/[${props.obj._id}]`}
                      as={`/edit/${props.obj._id}`}
                    >
                      <a className="btn btn-warning">Edit</a>
                    </Link>
                    <button onClick={deleted} className="btn btn-danger">
                      Delete
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
