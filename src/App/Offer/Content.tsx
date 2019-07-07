import React from 'react';

export const talkContent = () => {
  return (
    <div className="offer__content">
      <h3>Enstaka samtal</h3>
      <p>
        <strong>600 SEK</strong>
        <br />
        Samtalstid 50 minuter.
      </p>
      <hr />
      <p>Utöver doulapaket kan jag erbjuda enstaka samtal under såväl graviditet som efter förlossning. </p>
    </div>
  );
};

export const packageContent = () => {
  return (
    <div className="offer__content">
      <h3>Doulapaket</h3>
      <p>
        <strong>Ordinarie 7000 SEK</strong>
        <br />
        <em> Jag doular mina första födslar till reducerat pris och erbjuder 20% rabatt på bokningar tom 1/9.</em>{' '}
      </p>
      <hr />
      <p>
        <strong>Uppstart</strong> – Vi ses för ett kostnadsfritt kort möte bara för att känna av personkemi och för att jag ska kunna
        berätta lite mer om vad jag som doula kan erbjuda dig/er. Vill du härefter påbörja ett samarbete bokar vi en följande träff och ett
        avtal tecknas.
      </p>
      <p>
        <strong>Förberedade samtal</strong> – Vi pratar om önskemål och tankar inför födsel. Hur vill du/ni föda? Vad finns det för
        förväntningar? Finns det några eventuella rädslor? Vi pratar förlossingsställningar, smärtlindring, kejsarsnitt. Vi testar
        andningsövningar och massage. Detta möte brukar vara 2-3 timmar.
      </p>
      <p>
        <strong>Jour</strong> – Doulan har jour hela dygnet från två veckor före beräknad födsel till dess att bebisen har kommit. Under
        denna period är doulan tillgänglig dag som natt för att du ska kunna känna dig trygg inför att din förlossning startar. Det går
        utmärkt att kontakta doulan under denna period vid eventuella frågor eller funderingar.
      </p>
      <p>
        <strong>Förlossning</strong> – När ni tror att någonting är på gång kontaktar ni mig. Vi möts upp hemma eller på
        förlossningsavdelning. Som doula stannar jag hos er under hela förlossningen och lämnar er när barnet är fött och ni känner er
        trygga.
      </p>
      <p>
        <strong>Eftersamtal</strong> – Några veckor efter förlossning träffas vi för att samtala om förlossningsupplevelsen. Vill hjälper
        jag gärna till och rådgör kring eventuell amning.
      </p>
    </div>
  );
};

export const emergencyContent = () => {
  return (
    <div className="offer__content">
      <h3>Akutdoula</h3>
      <p>
        <strong>3500 SEK</strong>
      </p>
      <hr />
      <p>Jag tar uppdrag som akutdoula i mån av tid (doula utan jour eller församtal). </p>
    </div>
  );
};
