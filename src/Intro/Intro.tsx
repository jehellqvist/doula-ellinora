import './Intro.scss';

import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="hero--content">
      <h2>Doula i trakterna av Jönköping, Linköping, Ulricehamn &amp; Värnamo</h2>
      <p>
        Att vänta och föda barn kan vara det mest unika en människa är med om under en livstid. Att känna sig trygg såväl under graviditet
        som förlossning borde vara en mänsklig rättighet. Den svenska mödra- och förlossningsvården har idag sällan möjlighet att ge den
        gravida och eventuell partner de rätta förutsättningarna för att mota ett nytt liv till världen med lugn, trygghet och lycka. Att
        välja att ta stöd av en doula ökar sannolikheten för en såväl positiv graviditet- som förlossningsupplevelse.
      </p>
      <button className="primary">Vem är doula ellinora?</button>
      <button className="secondary">Vad gör en doula?</button>
    </div>
  );
};

export default Intro;
