import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import PostsProvider from "./context/PostsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <App />
          <ToastContainer />
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
);
