import { Routes, Route } from "react-router-dom";
import SupportPage from "./components/SupportPage";
import MarketingPage from "./components/MarketingPage";
import CopyrightsPage from "./components/CopyrightsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

const routes = () => (
  <Routes>
    <Route path="/support" element={<SupportPage />} />
    <Route path="/marketing" element={<MarketingPage />} />
    <Route path="/copyright" element={<CopyrightsPage />} />
    <Route path="/privacy" element={<PrivacyPolicyPage />} />
  </Routes>
);

export default routes;
