import './About.scss';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About: React.FC = () => {
  return (
    <div className="container-fluid about">
      <h2>Vem är doula Ellinora?</h2>

      <div className="row">
        <div className="col-md-12 col-lg-8 align-self-center">
          <div className="img__container">
            <img src={require('../../assets/doula-ellinora-family.jpg')} alt="Bild på doula ellinora" />
          </div>
        </div>
        <div className="col-md-12 col-lg-16">
          <p>
            Jag heter Ellinora och lever med partner och tre barn. Under min andra graviditet väcktes ett intresse för hur den gravida själv
            kan påverka sin förlossning. Tyvärr blev min första förlossning inte en positiv upplevelse då jag både kände mig ensam och rädd
            och den ordinära förlossningsvården inte kunde erbjuda mig något stöd. Till mina kommande två förlossningar förstod jag vikten
            av stressminimering, trygghet och stöd vilket ledde till två stärkande och positiva förlossningsupplevelser.
          </p>
          <p>
            <em>Med rätt stöd kan föda barn vara det häftigaste och roligaste i hela världen!</em>
          </p>
          <p>
            Jag är utbildad doula genom ODIS (organisationen för doulor och förlossningspedagoger i Sverige). Jag är utbildad
            samtalsterapeut och har en kandiaatexamen inom psykiatri. Jag har erfarenhet av såväl famileterapi, postpartumdiagnoser och
            arbete som kurator.
          </p>
        </div>
      </div>
      <AnchorLink href="#contact">
        <button className="about__btn primary">
          Kontakta mig för bokning eller info <i className="fa fa-chevron-right" />
        </button>
      </AnchorLink>
    </div>
  );
};

export default About;
