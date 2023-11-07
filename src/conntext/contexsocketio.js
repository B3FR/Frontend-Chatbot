import React, { createContext, useState } from "react";
import { useEffect } from "react";
import client from "socket.io-client";

export const Context = createContext({});

export const ContextSocketProvider = ({ children }) => {
  const [Socket, setSocket] = useState(null);
  const [User, setUser] = useState(null);

  useEffect(() => {
    const SOCKET_URI = "ws://localhost:5000";
    const socket = client(SOCKET_URI);
    setSocket(socket);

    return () => {
      // Lógica para desconectar el socket si es necesario
    };
  }, []);

  return (
    <Context.Provider value={{ Socket, User, setUser }}>
      {children}
    </Context.Provider>
  );
};

export const UserContext = Context;

export default ContextSocketProvider;
