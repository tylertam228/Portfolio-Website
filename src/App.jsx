import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { TechStack } from "./sections/TechStack";
import { Testimonials } from "@/sections/Testimonials";
import { WorkExperience } from "@/sections/WorkExperience";
import { Contact } from "@/sections/Contact";
import { Certificate } from "@/sections/Certificate";

function App() {
  return<div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <WorkExperience />
      <Education />
      <Certificate />
      <Testimonials />
      <Contact />
    </main>
  </div>;
}

export default App