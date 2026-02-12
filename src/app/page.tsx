import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Volunteer from "@/components/Volunteer";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Copyrights from "@/components/Copyrights";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Volunteer />
      <Education />
      <Contact />
      <Copyrights />
    </>
  );
}
