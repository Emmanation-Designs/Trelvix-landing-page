/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { PricingPage } from './pages/PricingPage';
import { Enterprise } from './pages/Enterprise';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Security } from './pages/Security';
import { FAQ } from './pages/FAQ';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-500 selection:bg-emerald-500/20 selection:text-emerald-600 dark:selection:text-emerald-400 overflow-x-hidden antialiased">
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Routing Stage */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/security" element={<Security />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>

          {/* Minimal Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
