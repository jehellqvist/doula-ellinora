import './Intro.scss';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface IntroProps {
  // onAboutClick: Function;
}
const Intro: React.FC<IntroProps> = props => {
  return (
    <div className="hero__content">
      <h1>Doula i trakterna av Borås, Göteborg &amp; Jönköping</h1>
      <p>
        Att vänta och föda barn kan vara det mest unika en människa är med om under en livstid. Att känna sig trygg såväl under graviditet
        som förlossning borde vara en mänsklig rättighet. Den svenska mödra- och förlossningsvården har idag sällan möjlighet att ge den
        gravida och eventuell partner de rätta förutsättningarna för att mota ett nytt liv till världen med lugn, trygghet och lycka. Att
        välja att ta stöd av en doula ökar sannolikheten för en såväl positiv graviditet- som förlossningsupplevelse.
      </p>
      <AnchorLink href="#about">
        <button className="primary">Vem är doula ellinora?</button>
      </AnchorLink>
      <AnchorLink href="#doula">
        <button className="secondary">Vad gör en doula?</button>
      </AnchorLink>
    </div>
  );
};

export default Intro;
