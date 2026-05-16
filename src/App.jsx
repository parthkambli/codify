import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';     // ← Added Footer

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Placement from './pages/Placement';
import Enquiry from './pages/Enquiry';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/enquiry" element={<Enquiry/>} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;