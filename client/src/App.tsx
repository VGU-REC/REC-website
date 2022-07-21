import { Footer, Navbar, RichTextContent } from "components";
import { serializeRichText } from "helpers";
import {
  About,
  Home,
  Activities,
  Projects,
  Blogs,
  Achievements,
  PastProjects,
  ProjectIdeas,
  RecruitingProjects,
  NewProject,
} from "pages";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Descendant } from "slate";

const content: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "text" }],
  },
  {
    type: "paragraph",
    children: [{ text: "bold", bold: true }],
  },
  {
    type: "paragraph",
    children: [{ text: "italic", italic: true }],
  },
  {
    type: "paragraph",
    children: [{ text: "underline", underline: true }],
  },
  {
    type: "paragraph",
    children: [{ text: "strikethrough", strike: true }],
  },
  {
    type: "paragraph",
    children: [{ text: "superscript", align: "super" }],
  },
  {
    type: "paragraph",
    children: [{ text: "subscript", align: "sub" }],
  },
  {
    type: "paragraph",
    children: [{ text: "font", font: "Courier New" }],
  },
  {
    type: "paragraph",
    children: [{ text: "fontSize", size: 14 }],
  },
  {
    type: "paragraph",
    children: [{ text: "textColor", color: "#f00" }],
  },
  {
    type: "paragraph",
    children: [{ text: "highlightColor", bgColor: "#ff0" }],
  },
];

function App() {
  return (
    <div>
      <RichTextContent
        canEdit
        placeholder="Write something..."
        serializedContent={serializeRichText(content)}
      />
      <hr />
      <RichTextContent serializedContent="[]" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activity" element={<Activities />} />
          <Route path="activity/:id" element={<></>} />
          <Route path="project" element={<Projects />} />
          <Route path="project/past" element={<PastProjects />} />
          <Route path="project/past/:id" element={<></>} />
          <Route path="project/recruiting" element={<RecruitingProjects />} />
          <Route path="project/:id" element={<></>} />
          <Route path="project/new" element={<NewProject />} />
          {/* Pending + recruiting */}
          <Route path="project/idea" element={<ProjectIdeas />} />
          <Route path="project/idea/:id" element={<></>} />

          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:id" element={<></>} />

          <Route path="achievement" element={<Achievements />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
