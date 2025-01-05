import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MoreAboutMe from './pages/MoreAboutMe';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<MoreAboutMe />} />
        <Route path="/contactMe" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
