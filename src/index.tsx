import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

declare module '@mui/material/styles' {
    interface Theme {
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
        text: {

        }
    }
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },{
        path: "/new",
        element: <App />
    },{
        path: "/popular",
        element: <App />
    },{
        path: "/tending",
        element: <App />
    },{
        path: "/categories",
        element: <App />
    },
]);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <RouterProvider router={router} />
        </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
