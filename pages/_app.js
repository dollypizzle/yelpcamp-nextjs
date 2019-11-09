import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import UserContext from '../src/components/UserContext';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('token');
    console.log(user);
    if (user) {
      this.setState({
        user,
      });
    } else {
      Router.push('/campgrounds');
    }
  }

  signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
    Router.push('/campgrounds');
  };

  render() {
    const { Component, pageProps } = this.props;

    console.log('render');

    return (
      <>
        <UserContext.Provider
          value={{
            user: this.state.user,
            signIn: this.signIn,
            signOut: this.signOut,
          }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </>
    );
  }
}
