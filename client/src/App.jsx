import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Owner from './pages/Owner';
import Courses from './pages/Courses';
import Copyright from './pages/Copyright';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/copyright" element={<Copyright />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
