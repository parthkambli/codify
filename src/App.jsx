import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

// Import pages (we'll create them soon)
import Home from './pages/Home';
// import About from './pages/About';
// import Courses from './pages/Courses';
// import Contact from './pages/Contact';
// import Placement from './pages/Placement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/placement" element={<Placement />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;