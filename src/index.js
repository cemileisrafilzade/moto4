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
import NewPromotion from "./pages/NewPromotion/NewPromotion";
import CarDetail from "./pages/CarDetail/CarDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/elan" element={<Advertisement />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/more-filters" element={<MoreFilters />} />
          <Route path="/new-promotion" element={<NewPromotion />} />
          <Route path="/auto/:id" element={<CarDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
initializeIcons();
