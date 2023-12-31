import React, { useEffect } from 'react';
import Form from "./components/form/form";
import Header from "./components/ui/Header";
import Logo from "../src/assets/logo.png";
import "../src/style/Home.css"

function ChatBot() {
  useEffect(() => {
    console.log('esperando la página...');
    // Verificar si la página ya ha sido recargada
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      // Realizar alguna acción antes de recargar (puedes dejar esto vacío o agregar algo según tus necesidades)
      console.log('Recargando la página...');

      // Marcar la página como recargada en localStorage
      localStorage.setItem('hasReloaded', 'true');

      // Recargar la página
      window.location.reload();
    }
  }, []);
  return (
    
      <div>
        <Header />
        <div className="content_title">
          <h2>SI LLEGA A TUS MANOS,</h2>
          <div>
            <h2>ES </h2>
            <h2 className="active"> OLVA</h2>
          </div>
        </div>
        <div className="content_main">
          <div className="content_description">
            <img src={Logo} className="logo_home" alt="logo"></img>
            <p><em>REALIZA TU CONSULTA CON EL NUEVO CHAT-BOT</em></p>
          </div>
          <div className="content_chat_main">
            <div className="chat_title">
              <p className="bolt">Te damos la bienvenida al nuevo ChatBot</p>
              <p>Experimenta tu copiloto para resolver tus consultas</p>
              <div className="linea_separación">
                <div className="linea"></div>
                <div className="triangulo"></div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
  
  );
}

export default ChatBot;