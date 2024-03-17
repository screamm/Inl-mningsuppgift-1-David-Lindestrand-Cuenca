import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { router } from "./Router";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import { SecretMonkey } from "./context/secretmonkey";


    ReactDOM.createRoot(document.getElementById("root")!).render(

    <React.StrictMode>

    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN} 
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} 
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <RouterProvider  router={router}></RouterProvider>
    </Auth0Provider>

  </React.StrictMode>
      );
      