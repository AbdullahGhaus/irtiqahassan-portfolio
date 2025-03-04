import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/portfolio'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
