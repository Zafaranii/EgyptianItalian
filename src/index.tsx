import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n"; // Import i18n configuration
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContainerScreen } from "./screens/ContainerScreen";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { PartnerProgramsPage } from "./pages/PartnerProgramsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { OrderOnlinePage } from "./pages/OrderOnlinePage";
import { ContactPage } from "./pages/ContactPage";
import { measurePageLoad } from "./lib/performance";

// Initialize performance monitoring
measurePageLoad();

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ContainerScreen />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/partner-programs" element={<PartnerProgramsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);