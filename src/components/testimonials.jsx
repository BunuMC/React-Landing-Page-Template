import React from "react";

export const Testimonials = () => {
  // Dados diretamente no componente
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Cliente - Conserto de Geladeira",
      text: "Minha geladeira voltou a funcionar como nova em menos de 2 horas. Serviço rápido e com garantia!",
      rating: 5,
      photo: "img/testimonials/01.jpg"
    },
    {
      name: "Ana Oliveira",
      role: "Cliente - Troca de Bomba d'Água",
      text: "Atendimento excelente! O técnico explicou todo o problema e ainda fez uma limpeza preventiva na minha máquina.",
      rating: 4,
      photo: "img/testimonials/04.jpg"
    },
    {
      name: "Roberto Santos",
      role: "Cliente - Emergência 24h",
      text: "Meu freezer quebrou à noite e eles atenderam imediatamente. Salvou todos os meus alimentos!",
      rating: 5,
      photo: "img/testimonials/03.jpg"
    }
  ];

  // Componente de estrelas de avaliação
  const StarRating = ({ rating }) => {
    return (
      <div style={{ color: "#FFD700", margin: "5px 0" }}>
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fa ${i < rating ? "fa-star" : "fa-star-o"}`}
            style={{ margin: "0 2px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div id="testimonials" style={{
      padding: "60px 0",
      background: "#f8f9fa",
      textAlign: "center"
    }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2c3e50" }}>O que nossos clientes dizem</h2>
          <p style={{ color: "#7f8c8d" }}>Avaliações reais de quem já usou nossos serviços</p>
        </div>

        <div className="row">
          {testimonials.map((item, index) => (
            <div key={index} className="col-md-4" style={{ marginBottom: "30px" }}>
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                height: "100%"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 15px",
                  border: "3px solid #3498db"
                }}>
                  <img 
                    src={item.photo} 
                    alt={item.name} 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                
                <StarRating rating={item.rating} />
                
                <p style={{
                  fontStyle: "italic",
                  color: "#555",
                  margin: "15px 0"
                }}>
                  "{item.text}"
                </p>
                
                <h4 style={{ margin: "0", color: "#2c3e50" }}>{item.name}</h4>
                <p style={{ color: "#3498db", margin: "5px 0 0" }}>
                  <small>{item.role}</small>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <a 
            href="#contact" 
            style={{
              background: "#3498db",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#2980b9"}
            onMouseLeave={(e) => e.target.style.background = "#3498db"}
          >
            <i className="fa fa-edit" style={{ marginRight: "8px" }}></i>
            Deixe sua avaliação
          </a>
        </div>
      </div>
    </div>
  );
};