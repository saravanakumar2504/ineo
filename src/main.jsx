import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { theme } from './theme';

import store from "./store";
import "./index.css";
import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
