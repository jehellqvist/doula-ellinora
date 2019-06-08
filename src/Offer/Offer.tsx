import './Offer.scss';

import React from 'react';

const Offer: React.FC = () => {
  return (
    <div className="row">
      <div className="col-xs-24 col-md-8">
        <div className="offer__card offer__card--package">
          <div className="offer__card__content">Doulapaket</div>
        </div>
      </div>
      <div className="col-xs-24 col-md-8">
        <div className="offer__card offer__card--talk">
          <div className="offer__card__content">Enstaka samtal</div>
        </div>
      </div>
      <div className="col-xs-24 col-md-8">
        <div className="offer__card">
          <div className="offer__card__content">Akutdoula</div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
