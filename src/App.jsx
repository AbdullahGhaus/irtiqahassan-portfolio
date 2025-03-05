import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/portfolio'

function App() {


  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight; // More accurate height
      window.parent.postMessage({ type: "iframeResize", height }, "*");
    };

    sendHeight(); // Send height initially
    window.addEventListener("resize", sendHeight); // Update height on resize
    window.addEventListener("load", sendHeight); // Ensure it runs after content loads

    return () => {
      window.removeEventListener("resize", sendHeight);
      window.removeEventListener("load", sendHeight);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
