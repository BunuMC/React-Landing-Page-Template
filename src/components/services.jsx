import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center" style={{ 
      padding: "60px 0", 
      backgroundColor: "#f8f9fa" 
    }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#2c3e50" }}>Nossos Serviços</h2>
          <p style={{ color: "#ffffff" }}>Soluções especializadas com garantia de 90 dias</p>
        </div>

        <div className="row" style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center" 
        }}>
          {props.data ? (
            props.data.map((service, index) => (
              <div 
                key={`${service.name}-${index}`} 
                className="col-md-4 col-sm-6" 
                style={{ 
                  marginBottom: "30px",
                  display: "flex" // Adicionado para igualar a altura dos cards
                }}
              >
                <div 
                  className="service-box" 
                  style={{
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "30px 25px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    width: "100%", // Ocupa toda a largura disponível
                    display: "flex",
                    flexDirection: "column",
                    height: "100%" // Garante que todos os cards tenham a mesma altura
                  }}
                >
                  <div style={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: "#3498db20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3498db",
                    fontSize: "30px"
                  }}>
                    <i className={service.icon || "fa fa-cog"}></i>
                  </div>
                  
                  <h3 style={{ 
                    color: "#2c3e50", 
                    marginBottom: "15px",
                    minHeight: "60px" // Altura fixa para o título
                  }}>
                    {service.name}
                  </h3>
                  
                  <p style={{ 
                    color: "#7f8c8d",
                    marginBottom: "20px",
                    flexGrow: 1 // Faz o parágrafo ocupar o espaço disponível
                  }}>
                    {service.text}
                  </p>
                  
                  <div style={{ 
                    marginBottom: "20px",
                    minHeight: "40px" // Altura fixa para o preço
                  }}>
                    <span style={{
                      background: "#3498db10",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      color: "#3498db",
                      fontWeight: "600",
                      display: "inline-block"
                    }}>
                      A partir de {service.price}
                    </span>
                  </div>
                  
                  <div style={{ marginTop: "auto" }}> {/* Empurra o botão para baixo */}
                    <a 
                      href="#contact" 
                      style={{
                        display: "inline-block",
                        background: "#3498db",
                        color: "#fff",
                        padding: "10px 25px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "all 0.3s",
                        width: "80%",
                        maxWidth: "200px",
                        margin: "0 auto"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#2980b9";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "#3498db";
                      }}
                    >
                      <i className="fa fa-wrench" style={{ marginRight: "8px" }}></i>
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>Carregando serviços...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};