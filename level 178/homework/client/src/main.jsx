import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import App from './App.jsx';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://950143872f2434d35261865ac3372e35@o4511281138761728.ingest.us.sentry.io/4511281581457408",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </StrictMode>,
);
