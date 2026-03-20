import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import PostsProvider from "./context/PostsContext";
import { CommentsProvider } from "./context/CommentsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <CommentsProvider>
            <App />
            <ToastContainer />
          </CommentsProvider>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
);
