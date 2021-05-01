import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import store from './store';
import Posts from './components/Posts';

const Providers = () => {
  return (
    <Provider store={store}>
      <Routes />
      {/* <Posts /> */}
    </Provider>
  );
};

export default Providers;
