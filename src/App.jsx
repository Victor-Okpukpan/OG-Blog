import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Blogpost from "./pages/Blogpost";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css"

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
