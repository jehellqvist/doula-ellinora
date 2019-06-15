import './Offer.scss';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { emergencyContent, packageContent, talkContent } from './Content';
import OfferCard from './OfferCard/OfferCard';

class Offer extends React.Component<{}, { details: 'package' | 'talk' | 'emergency' | 'none' }> {
  offerContent: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.state = { details: 'none' };
    this.offerContent = React.createRef();
  }
  toggleDetails = (event: any, type: 'package' | 'talk' | 'emergency' | 'none') => {
    if (type === this.state.details) {
      this.setState({ details: 'none' });
    } else {
      this.setState({ details: type });
      // this.offerContent.current.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start'
      // });
    }
  };

  getDetailContent(type: 'package' | 'talk' | 'emergency' | 'none') {
    switch (type) {
      case 'package':
        return packageContent();
      case 'talk':
        return talkContent();
      case 'emergency':
        return emergencyContent();
      default:
        return;
    }
  }

  render() {
    return (
      <div className="offer__container-fluid">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-24 col-md-24 col-lg-24 col-xl-18">
              <div className="row">
                <OfferCard type={'package'} toggleDetails={this.toggleDetails} />
                <OfferCard type={'talk'} toggleDetails={this.toggleDetails} />
                <OfferCard type={'emergency'} toggleDetails={this.toggleDetails} />
              </div>
              <em className="float-right moms">Priser inklusive moms</em>
            </div>
          </div>
        </div>
        <div id="offer-content" className="offer__details">
          <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.details !== 'none' ? (
              <div className="container-fluid offer__details--show">
                <div className="row justify-content-center">
                  <div className="col-sm-24 col-md-22 col-lg-24 col-xl-18">{this.getDetailContent(this.state.details)}</div>
                </div>
              </div>
            ) : (
              ''
            )}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Offer;
