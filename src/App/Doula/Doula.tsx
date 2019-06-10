import './Doula.scss';

import React from 'react';

const Doula: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container-fluid doula">
        <h2>Vad gör en doula?</h2>
        <div className="row">
          <div className="col-md-12 col-lg-16 align-self-center">
            <p>
              En doula är en person som har erfarenhet av förlossningar och kunskap om att ge stöd och information till den gravida kvinnan
              och eventuell partner. Ordet doula kommer från grekiskan och betyder ungefär ”kvinna som ger omvårdnad”. Doulor har funnits
              långt tillbaka i historien men har i vår moderna tid blivit mer och mer ersatta av enbart medicinsk vård. Idag ser vetenskapen
              stora fördelar i att kombinera doulor med annan medicinskt utbildad personal.
            </p>
            <p>
              En doula erbjuder stöd före, under och efter en födsel. Doulan bidrar till en trygghet och ett lugn som i sin tur har tydligt
              positiva fördelar hos den födande. Doulan tror på den födande kvinnan och att kroppen har en egen genuin förmåga att föda
              barn.
            </p>
          </div>
          <div className="col-md-12 col-lg-8 align-self-center">
            <div className="img__container">
              <img src={require('../../assets/bertil-129.jpg')} alt="Bild på doula ellinora" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid doula">
        <h2 className="left">Vem behöver en doula?</h2>
        <div className="row">
          <div className="col-md-12 col-lg-8 align-self-center">
            <div className="img__container">
              <img src={require('../../assets/bertil-98.jpg')} alt="Bild på doula ellinora" />
            </div>
          </div>
          <div className="col-md-12 col-lg-16 align-self-center">
            <p>
              Alla! Kanske är du förstagångsförälder? Kanske har du en dålig förlossningsupplevelse i bagaget? Kanske har du en positiv
              förlossningsupplevelse i bagaget och säkra upp för att kommande förlossning ska bli lika bra eller ännu bättre? Kanske föder
              du vaginalt eller med kejsarsnitt. Kanske vill du ha all smärtlindring som finns? Kanske vill du föda helt naturligt? Jag
              hjälper och stödjer dig utifrån vem du och eventuell partner är.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid doula">
        <h2>Varför doula?</h2>
        <div className="row">
          <div className="col-md-12 col-lg-16 align-self-center">
            <p>Vetenskapliga studier visar att då den födande får stöd av en doula minskar: </p>
            <ul>
              <li>antalet kejsarsnitt</li>
              <li>förlossningens längd</li>
              <li>behovet av medicinsk smärtlindring</li>
              <li>önskemål om ryggbedövning</li>
            </ul>
            <p>
              Upplevelsen är att de som fött med stöd av doula känner sig såväl mer delaktiga under sin förlossning som mer tillfreds med
              sin förlossningsuppelevelse.
            </p>
            <p>
              Mer information om doula och doulaeffekten finns att läsa på{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.doula.nu/information">
                www.doula.nu/information
              </a>
            </p>
          </div>
          <div className="col-md-12 col-lg-8 align-self-center">
            <div className="img__container">
              <img src={require('../../assets/IMG_7645.JPG')} alt="Bild på doula ellinora" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Doula;
