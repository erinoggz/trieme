import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create context
const WebSocketContext = createContext();

export const useWebSocket = () => useContext(WebSocketContext);

// Create a provider to initialize WebSocket only once
export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        // Clean up WebSocket on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    );
};
