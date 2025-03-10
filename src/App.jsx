import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PageOneSectionOne from './components/page one/sectionOne';
import PageOneSectionTwo from './components/page one/sectionTwo';
import PageOneSectionThree from './components/page one/sectionThree';
import PageOneSectionFour from './components/page one/sectionFour';
import PageTwoSectionOne from './components/page two/sectionOne';
import PageTwoSectionTwo from './components/page two/sectionTwo';
import PageTwoSectionThree from './components/page two/sectionThree';
import PageThreeSectionOne from './components/page three/sectionOne';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/page-one/section-one" element={<PageOneSectionOne />} />
        <Route path="/page-one/section-two" element={<PageOneSectionTwo />} />
        <Route path="/page-one/section-three" element={<PageOneSectionThree />} />
        <Route path="/page-one/section-four" element={<PageOneSectionFour />} />

        <Route path="/page-two/section-one" element={<PageTwoSectionOne />} />
        <Route path="/page-two/section-two" element={<PageTwoSectionTwo />} />
        <Route path="/page-two/section-three" element={<PageTwoSectionThree />} />

        <Route path="/page-three/section-one" element={<PageThreeSectionOne />} />
      </Routes>
    </Router>
  )
}

export default App
