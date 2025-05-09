import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/sobre-nos-equipe.jpg" className="img-responsive" alt="Equipe EletroServ" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre a EletroServ</h2>
              <p>{props.data ? props.data.paragraph : "Há mais de 15 anos no mercado, oferecendo serviços especializados em conserto e manutenção de eletrodomésticos."}</p>
              
              <h3>Por que nos escolher?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><i className="fa fa-wrench"></i> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}><i className="fa fa-wrench"></i> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};