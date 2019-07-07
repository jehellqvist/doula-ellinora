import './App.css';

import React from 'react';

import About from './About/About';
import Doula from './Doula/Doula';
import Footer from './Footer/Footer';
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
        <section className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-22 col-md-18 col-lg-16 col-xl-14">
              <Intro />
            </div>
          </div>
        </section>
        <Offer />
        <section className="container-fluid">
          <div className="row justify-content-center">
            <div id="about" className="col-sm-24 col-md-24 col-lg-24 col-xl-18">
              <About />
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div id="doula" className="col-sm-24 col-md-24 col-lg-24 col-xl-18">
              <Doula />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
