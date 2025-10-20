import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Copyrights from "@/components/Copyrights";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Copyrights />
    </>
  );
}
