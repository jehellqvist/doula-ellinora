import './Footer.scss';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div id="contact" className="footer__contact">
        <h3>
          Kontakta mig för att boka eller om du vill veta mer om mitt doulande på <br />
          <a href="mailto:x@doulaellinora">x@doulaellinora</a>
        </h3>
        <a href="https://www.instagram.com/doulaellinora/">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Footer;
