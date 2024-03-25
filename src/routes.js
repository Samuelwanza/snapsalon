import { Routes, Route } from 'react-router-dom'
import SupportPage from './components/SupportPage';
import MarketingPage from './components/MarketingPage';
import CopyrightsPage from './components/CopyrightsPage';

const routes = () => (
  <Routes>
    <Route path="/support" element={<SupportPage/>} />
    <Route path="/marketing" element={<MarketingPage />} />
    <Route path="/copyright" element={<CopyrightsPage />} />
  </Routes>
);

export default routes;
