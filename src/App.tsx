import './App.css';

import React from 'react';

import About from './About/About';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Offer from './Offer/Offer';

class App extends React.Component<{}, {}> {
  about: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.about = React.createRef();
  }

  handleAboutClick = () => {
    this.about.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-22 col-md-18 col-lg-16 col-xl-14">
              <Intro onAboutClick={this.handleAboutClick} />
            </div>
          </div>
        </div>
        <br />
        <Offer />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div ref={this.about} className="col-sm-24 col-md-24 col-lg-20 col-xl-18">
              <About />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
