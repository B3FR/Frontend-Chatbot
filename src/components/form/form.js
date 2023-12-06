import React, { useEffect, useState, useRef, useContext } from 'react';
import { UserContext } from '../..//conntext/contexsocketio';

import io from 'socket.io-client';
import "../../style/form.css";
import Borrar from '../../assets/IconBorrar.svg';
import Enviar from '../../assets/Enviar.svg';


const socket = io('http://localhost:5000');

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messageListRef = useRef(null);
  const { User } = useContext(UserContext);


  useEffect(() => {
    // Manejar la conexión inicial
    socket.on('connect', () => {
      console.log('Connected to Socket.IO');
      // Enviar mensaje de saludo y opciones al servidor cuando se conecta el cliente
      socket.emit('client_connected');
    });

    // Manejar los mensajes entrantes
    socket.on('message', handleIncomingMessage);

    return () => {
      // Desconectar los eventos cuando el componente se desmonta
      socket.off('connect');
      socket.off('message', handleIncomingMessage);
    };
  }, []);

  const handleIncomingMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
    scrollToBottom();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputValue.trim() !== '' ? inputValue : null;
    handleSubmitMessage(message);
  };

  const handleOptionClick = (option) => {
    handleSubmitMessage(option);
  };

  const handleSubmitMessage = (message) => {
    if (message !== null) {
      const userMessage = {
        socket_id: socket.id,
        message: message,
        user: User,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      socket.emit('message', userMessage);
      setInputValue('');
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  return (
    <div className='contetChat'>
      <p></p>
      <ul className='content_text_main' ref={messageListRef}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.socket_id === 'bot' ? (
              <div className='content_bot'>
                <li className='content_text bot'>
                  <p>{message.message}</p>
                  
                  {message.options && message.options.length > 0 ? (
                  <div className='options'>
                    {message.options.map((option, index) => (
                      <button key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
                </li>
              </div>
            ) : null}
            {message.socket_id !== 'bot' ? (
              <div className='content_user'>
                <li className='content_text user'>
                  <p>{message.message}</p>
                </li>
              </div>
            ) : null}
          </div>
        ))}
      </ul>
      <div className='contentInput'>
        <form onSubmit={handleSubmit} className='form'>
          <button className='btnBorrar'><img src={Borrar} alt="Borrar" /></button>
          <div className='input_main'>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btnEnviar' type='submit'><img src={Enviar} alt="Enviar" /></button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;