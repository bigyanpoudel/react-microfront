import React from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { StylesProvider, ThemeProvider } from "@mui/styles";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Album />} />
      <Route path="/pricing" element={<Pricing />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <RouterProvider router={routers} />
      </StylesProvider>
    </ThemeProvider>
  );
};
export default App;
