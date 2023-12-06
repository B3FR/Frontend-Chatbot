import React, { useEffect, useState, useContext } from 'react';
import Fondo from '../../assets/Fondo1.png';
import { UserContext } from '../..//conntext/contexsocketio';

import io from 'socket.io-client';
import "../../style/form.css";

const socket = io('http://localhost:5000');

const App = () => {
    const [messages, setMessages] = useState([]);
    const { User } = useContext(UserContext);

    useEffect(() => {
        socket.on('message', handleIncomingMessage);

        return () => {
            socket.off('message', handleIncomingMessage);
        };
    }, []);

    const handleIncomingMessage = (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
    };

    const handleOptionClick = (option) => {
        handleSubmitMessage(option);
        console.log(User, "OPCION: " + option)
    };

    const handleSubmitMessage = (message) => {
        if (message !== null) {
            const userMessage = {
                socket_id: socket.id,
                message: message,
                user: User,
            };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            socket.emit('message', message);
        }
    };
    return (
        <div className='contetChat'>
            <ul className='content_text_main_principal'>
                <div className='main_principal'>
                    {messages.map((message, index) => (
                        <div className='options' key={index}>
                            {message.options && Array.isArray(message.options) && (
                                Array.from(message.options).map((option, index) => (
                                    <div className='optios_content'>
                                        <button key={index} onClick={() => handleOptionClick(option)}>
                                            <div className='optios_content_img'>
                                                <img classname='flecha' src={Fondo} alt=""></img>
                                            </div>
                                            {option}
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default App;