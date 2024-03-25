import { Routes, Route } from 'react-router-dom'
import SupportPage from './components/SupportPage';
import MarketingPage from './components/MarketingPage';

const routes = () => (
  <Routes>
    <Route path="/support" element={<SupportPage/>} />
    <Route path="/marketing" element={<MarketingPage />} />
  </Routes>
);

export default routes;
