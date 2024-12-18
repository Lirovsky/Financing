import BlogNews from "./components/BlogNews";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <div>
      <h1 className="flex h-96 items-center justify-center text-6xl font-bold text-white">
        Blog / News
      </h1>
      <BlogNews />
      <Footer />
    </div>
  );
}
