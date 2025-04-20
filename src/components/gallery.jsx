import React from "react";
import { Image } from "./image";

export const Gallery = () => {
  // Dados diretamente no componente (sem precisar do data.json)
  const portfolioItems = [
    {
      title: "Conserto de Geladeira",
      description: "Reparo no sistema de refrigeração - Geladeira Brastemp",
      image: "img/trabalhos/geladeira.jpg"
    },
    {
      title: "Troca de Bomba d'Água",
      description: "Máquina de lavar Electrolux - Peça original",
      image: "img/trabalhos/bomba.jpg"
    },
    {
      title: "Manutenção Preventiva",
      description: "Limpeza interna e revisão elétrica - Fogão Consul",
      image: "img/trabalhos/fogao.jpg"
    }
  ];

  return (
    <div id="portfolio" className="text-center" style={{ padding: "50px 0", background: "#f9f9f9" }}>
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "#333" }}>Nossos Trabalhos</h2>
          <p style={{ color: "#666" }}>Veja alguns dos serviços que realizamos</p>
        </div>
        
        <div className="row" style={{ marginTop: "30px" }}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6" style={{ marginBottom: "30px" }}>
              <div style={{
                background: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />
                <div style={{ padding: "20px" }}>
                  <h4 style={{ marginTop: "0", color: "#2c3e50" }}>{item.title}</h4>
                  <p style={{ color: "#7f8c8d" }}>{item.description}</p>
                  <button 
                    style={{
                      background: "#3498db",
                      color: "#fff",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                    onClick={() => window.location.hash = "#contact"}
                  >
                    Solicitar Este Serviço
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <a 
            href="#contact" 
            style={{
              background: "#e74c3c",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block"
            }}
          >
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </div>
  );
};