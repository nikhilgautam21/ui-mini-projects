import Home from './pages/Home/Home';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarouselNew from './components/Carousel/CarouselNew';
import ProjectLayout from './pages/Home/ProjectLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="carousel" element={<CarouselNew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
