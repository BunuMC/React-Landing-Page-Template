import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  phone: "",
  appliance: "",
  message: ""
};

export const Contact = (props) => {
  const [{ name, phone, appliance, message }, setState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    emailjs
      .sendForm("service_eletroserv", "template_eletroserv", e.target, "user_123456789")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Agende um Serviço</h2>
              <p>
                Preencha o formulário para solicitar um orçamento gratuito ou 
                agendar uma visita técnica.
              </p>
            </div>
            
            {submitted ? (
              <div className="alert alert-success">
                <i className="fa fa-check-circle"></i> Solicitação enviada! Entraremos em contato em breve.
              </div>
            ) : (
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Seu Nome"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="WhatsApp"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <select
                    name="appliance"
                    className="form-control"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Tipo de Eletrodoméstico</option>
                    <option value="Geladeira/Freezer">Geladeira/Freezer</option>
                    <option value="Máquina de Lavar">Máquina de Lavar</option>
                    <option value="Fogão/Cooktop">Fogão/Cooktop</option>
                    <option value="Micro-ondas">Micro-ondas</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Descreva o problema"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg">
                  <i className="fa fa-paper-plane"></i> Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contato Rápido</h3>
            <p>
              <i className="fa fa-whatsapp"></i> {props.data?.whatsapp || "(XX) XXXXX-XXXX"}
            </p>
            <p>
              <i className="fa fa-phone"></i> {props.data?.phone || "(XX) XXXX-XXXX"}
            </p>
            <p>
              <i className="fa fa-clock-o"></i> Atendimento: 24h
            </p>
          </div>
          
          <div className="contact-item emergency">
            <h4>Emergências</h4>
            <p>
              <i className="fa fa-exclamation-triangle"></i> Vazamentos ou riscos elétricos
            </p>
            <a href={`tel:${props.data?.emergency || "11987654321"}`} className="btn btn-emergency">
              <i className="fa fa-phone"></i> Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};