import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogSingle from "./pages/BlogSingle";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogsingle" element={<BlogSingle />} />
      </Route>
    </Routes>
  );
}
