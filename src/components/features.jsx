import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nossos Diferenciais</h2>
          <p>Conheça o que nos torna únicos no mercado</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 feature-item">
                  <div className="feature-icon">
                    <i className={d.icon}></i>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Carregando..."}
        </div>
      </div>
    </div>
  );
};