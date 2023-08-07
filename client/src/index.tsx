import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { AuthContextProvider } from "./hooks/AuthContext";
import { ChatContextProvider } from './hooks/ChatContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

