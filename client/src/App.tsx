import { Footer, Navbar, NewProject } from 'components';
import { About, Home, Activities, Projects, Blogs, Achievements, PastProjects, ProjectIdeas, RecruitingProjects } from 'pages';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activity" element={<Activities />} />
          <Route path="activity/:id" element={<></>} />
          <Route path="project" element={<Projects />} />
          <Route path="project/past" element={<PastProjects/>} />
          <Route path="project/past/:id" element={<></>} />
          <Route path="project/recruiting" element={<RecruitingProjects/>} />
          <Route path="project/:id" element={<></>} />
          <Route path="project/new" element={<NewProject />} />
          {/* Pending + recruiting */}
          <Route path="project/idea" element={<ProjectIdeas/>} />
          <Route path="project/idea/:id" element={<></>} />

          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:id" element={<></>} />

          <Route path="achievement" element={<Achievements />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
