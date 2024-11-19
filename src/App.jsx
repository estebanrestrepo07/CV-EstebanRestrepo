import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from 'Layouts/PublicLayout';
import Home from 'pages/Home';
import About from 'pages/About';
import Career from 'pages/Career';

function App() {
  return (
    <Router>
      <PublicLayout />
      <Routes path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
