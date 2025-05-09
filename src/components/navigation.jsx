import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <i className="fa fa-home"></i> EletroServ
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#services" className="page-scroll">Serviços</a></li>
            <li><a href="#about" className="page-scroll">Sobre Nós</a></li>
            <li><a href="#gallery" className="page-scroll">Nossos Trabalhos</a></li>
            <li><a href="#team" className="page-scroll">Técnicos</a></li>
            <li><a href="#contact" className="page-scroll">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};