import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import HomePage from './pages/HomePage';
import TestsDiagnosticsPage from './pages/TestsDiagnosticsPage';
import BookTestPage from './pages/BookTestPage';
import HomeCollectionPage from './pages/HomeCollectionPage';
import CentresPage from './pages/CentresPage';
import PatientCarePage from './pages/PatientCarePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import DigitalSystemPage from './pages/DigitalSystemPage';
import ReportsPage from './pages/ReportsPage';
import DesignSystemPreview from './pages/DesignSystemPreview';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tests" element={<TestsDiagnosticsPage />} />
        <Route path="/book" element={<BookTestPage />} />
        <Route path="/home-collection" element={<HomeCollectionPage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/patient-care" element={<PatientCarePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/digital" element={<DigitalSystemPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/design-system" element={<DesignSystemPreview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
