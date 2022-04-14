import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import PageLayout from './layouts/PageLayout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
