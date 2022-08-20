import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="89929856373-nmhmkfq4uvosr40c3ctomm99toam3tpn.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
