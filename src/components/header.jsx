import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Assistência Técnica Especializada"}
                </h1>
                <p>{props.data ? props.data.paragraph : "Conserto e manutenção de eletrodomésticos com garantia"}</p>
                <a href="#contact" className="btn btn-custom btn-lg page-scroll">
                  <i className="fa fa-phone"></i> Orçamento Grátis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};