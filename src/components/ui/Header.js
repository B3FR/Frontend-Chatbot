import "../../style/header.css";
import { Link } from 'react-router-dom';

const App = () => {
  const handleChatbotClick = () => {
    // Limpiar el localStorage al hacer clic en el botón CHATBOT
    localStorage.clear();
  };

  return (
    <div className="bodyHeader_main">
      <div className="bodyHeader1"></div>

      <div className="content_2">
        <div className="bodyHeader2"></div>
        <ul className="contain_Opciones">
          <button className="btn_opcion">CLIENTES</button>
          <p>/</p>
          <button className="btn_opcion">UBICANOS</button>
          <p>/</p>
          <button className="btn_opcion">NOTICIAS</button>
          <p>/</p>
          <button className="btn_opcion">CONTÁCTANOS</button>
          <p>/</p>
          <Link to="/auth/login">
            <button className="btn_opcion activate" onClick={handleChatbotClick}>
              CHATBOT
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default App;