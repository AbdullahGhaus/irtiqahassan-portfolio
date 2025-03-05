import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/portfolio'
import { useEffect } from 'react';
import CategoryMain from './components/categoryMain';
import SmoothScroll from './components/smoothScroll';
import CustomerCare from './components/customerCare';
import HorizontalSlider from './components/horizontalSlider';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/section-one" element={<CategoryMain />} />
        <Route path="/section-two" element={<HorizontalSlider />} />
        <Route path="/section-three" element={<CustomerCare />} />
      </Routes>
    </Router>
  )
}

export default App
