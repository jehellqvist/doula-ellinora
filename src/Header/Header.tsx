import './Header.scss';

import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header--wrapper">
      <div className="header--content">
        <h1>Doula Ellinora</h1>
        {/* <p className="header--content--info">Foto: wanderings</p> */}
      </div>
    </div>
  );
};

export default Header;
