import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Faq from "./pages/Faq/Faq";
import { initializeIcons } from "@fluentui/react";
import Advertisement from "./pages/Advertisement/Advertisement";
import MoreFilters from "./pages/MoreFilters/MoreFilters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/elan" element={<Advertisement />} />
          <Route path="/faq" element={<Faq />} />
          <Route path='/more-filters' element={<MoreFilters/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
initializeIcons();
