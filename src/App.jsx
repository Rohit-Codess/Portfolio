import ContactView from './views/ContactView';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <HomeView />
        <ProjectsView />
        <ContactView />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App;
