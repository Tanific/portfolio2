import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/default";
import HomePage from "./pages";
import ProjectPage from "./pages/projectsPage";
import ContactPage from "./pages/contactPage";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
