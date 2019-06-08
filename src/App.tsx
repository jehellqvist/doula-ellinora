import './App.css';

import React from 'react';

import Header from './Header/Header';
import Intro from './Intro/Intro';
import Offer from './Offer/Offer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1 col-md-3 col-lg-4 col-xl-5" />
          <div className="col-sm-22 col-md-18 col-lg-16 col-xl-14">
            <Intro />
          </div>
          <div className="col-sm-1 col-md-3 col-lg-4 col-xl-5" />
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-0 col-md-1 col-lg-2 col-xl-3" />
          <div className="col-sm-24 col-md-22 col-lg-20 col-xl-18">
            <Offer />
          </div>
          <div className="col-sm-0 col-md-1 col-lg-2 col-xl-3" />
        </div>
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default App;
