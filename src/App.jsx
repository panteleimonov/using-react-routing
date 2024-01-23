import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="Contacts" element={<Contacts />} />
            <Route path="About" element={<About />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Courses/:slug" element={<SingleCourse />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
