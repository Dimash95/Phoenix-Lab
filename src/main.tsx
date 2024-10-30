import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import router from "./router.tsx";
import Header from "./components/general/Header.tsx";
import Footer from "./components/general/Footer.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{router}</div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </Router>
  </StrictMode>,
);
