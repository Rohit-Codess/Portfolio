import ContactView from './views/ContactView';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import ScrollToTop from './components/ScrollTowhatsApp';
import ServicesView from './views/ServicesView';
import AboutView from './views/AboutView';
import ProjectDetailView from './views/ProjectDetailView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/projects/:id" element={<ProjectDetailView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
