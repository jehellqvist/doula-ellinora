import './OfferCard.scss';

import React from 'react';

class OfferCard extends React.Component<{ type: 'package' | 'talk' | 'emergency'; toggleDetails: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.state = { details: 'package' };
  }

  content(type: 'package' | 'talk' | 'emergency') {
    switch (type) {
      case 'package':
        return (
          <div className="offer__card__content">
            <h3>Doulapaket</h3>
            <p>
              <strong>Ordinarie 7000 SEK</strong>
            </p>
            <p>
              <em>Jag doular mina första födslar till reducerat pris så passa på att boka redan nu.</em>
            </p>
          </div>
        );
      case 'talk':
        return (
          <div className="offer__card__content">
            <h3>Enstaka samtal</h3>
            <p>
              <strong>600 SEK</strong>
            </p>
            <p> Samtalstid 50 minuter.</p>
          </div>
        );
      case 'emergency':
        return (
          <div className="offer__card__content">
            <h3>Akutdoula</h3>
            <p>
              <strong>3500 SEK</strong>
            </p>
          </div>
        );
      default:
        break;
    }
  }

  getClass(type: 'package' | 'talk' | 'emergency') {
    return `offer__card offer__card--${type}`;
  }

  render() {
    return (
      <div className="col-xs-24 col-md-8">
        <div className={this.getClass(this.props.type)} onClick={event => this.props.toggleDetails(event, this.props.type)}>
          {this.content(this.props.type)}
        </div>
      </div>
    );
  }
}

export default OfferCard;
