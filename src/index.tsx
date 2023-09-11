import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "state/ModalContext";
import { UserProvider } from "state/UserContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserProvider>
  </React.StrictMode>
);
