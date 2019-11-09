import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://yelpcamp-dollyp-api.herokuapp.com',
});

// const instance = axios.create({
//   baseURL: 'https://yelp-yaagz-api.herokuapp.com',
// });

export default instance;
