import React from 'react';

import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectLayout from './pages/Home/ProjectLayout';
import AccordionList from './components/Accordion/AccordionList';
import './App.css';

const CarouselNewComponent = React.lazy(() => import('./components/Carousel/CarouselNew'));
const AccordionListComponent = React.lazy(() => import('./components/Accordion/AccordionList'));
const TabsComponent = React.lazy(() => import('./components/Tabs/Tabs'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="carousel" element={<CarouselNewComponent />} />
          <Route path="accordion" element={<AccordionListComponent />} />
          <Route path="tabs" element={<TabsComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
