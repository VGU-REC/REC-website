import About from 'components/About';
import Achievement from 'components/Achievement';
import Activity from 'components/Activity';
import Blog from 'components/Blog';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Pagination from 'components/Pagination';
import Project from 'components/Project';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
    {/* <Navbar/> */}
    {/* <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="activity" element={<Activity />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
        <Route path="achievement" element={<Achievement />} />
      </Route>   
    </Routes> */}
    {/* <Footer/> */}
    <Home/>
    </div>
  );
}

export default App;
