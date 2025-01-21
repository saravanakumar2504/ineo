import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import store from "./store";
import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#302c64", // Set the button background color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text for buttons
          borderRadius: "8px", // Optional: Add rounded corners
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#c0dce4", // Set the input background color
          borderRadius: "8px", // Optional: Add rounded corners to inputs
          padding: "5px", // Optional: Add padding for better spacing
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#c0dce4", // Set the background color for TextField
          borderRadius: "8px", // Optional: Add rounded corners to TextField
        },
      },
    },
  },
});

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
