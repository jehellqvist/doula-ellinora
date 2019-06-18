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
      <div className="footer__credits">
        <p>
          Bilderna på sidan är tagna av doulaellinora och
          <a href="http://www.wanderings.se/"> www.wanderings.se</a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
