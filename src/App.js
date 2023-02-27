import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

